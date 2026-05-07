// Entry point.
//
// Responsibilities:
//   1. Bind copy into the DOM from content/copy.js (declarative templates).
//   2. Build the text-only fallback for reduced-motion + screen readers.
//   3. Boot the cosmic stage and the per-scene controllers.
//   4. Wire the scroll engine → stage + scenes on every tick.
//   5. Respect prefers-reduced-motion.

import { copy } from "../content/copy.js";
import { ScrollEngine } from "./util/scroll.js";
import { prefersReducedMotion, onReducedMotionChange } from "./util/reducedMotion.js";
import { Stage } from "./stage.js";
import { createLiftoffScene } from "./scenes/liftoff.js";
import { createWhyNowScene } from "./scenes/whyNow.js";
import { createGalleryScene } from "./scenes/gallery.js";
import { createActorsScene } from "./scenes/actors.js";
import { createGovernanceScene } from "./scenes/governance.js";
import { createFuturesScene } from "./scenes/futures.js";
import { createTimelineScene } from "./scenes/timeline.js";
import { createOpenQuestionsScene } from "./scenes/openQuestions.js";
import { createRegNetScene } from "./scenes/regNet.js";

// Closer is purely static — no scroll-driven behaviour beyond document flow.
const createCloserScene = () => ({ update() {} });

// ---------- Copy binding ----------

function resolvePath(obj, path) {
  return path.split(".").reduce((o, k) => (o == null ? undefined : o[k]), obj);
}

function bindCopy(root, data) {
  // Simple [data-bind] text fills
  root.querySelectorAll("[data-bind]").forEach((el) => {
    const val = resolvePath(data, el.dataset.bind);
    if (typeof val === "string") el.textContent = val;
  });

  // [data-bind-list] with a child <template data-template-id="X">
  root.querySelectorAll("[data-bind-list]").forEach((container) => {
    const list = resolvePath(data, container.dataset.bindList);
    if (!Array.isArray(list)) return;
    const tplId = container.dataset.template;
    const tpl = container.querySelector(`template[data-template-id="${tplId}"]`);
    if (!tpl) return;

    // Remove any previously rendered items (keep the <template>)
    Array.from(container.children).forEach((c) => {
      if (c.tagName !== "TEMPLATE") c.remove();
    });

    list.forEach((item) => {
      const clone = tpl.content.firstElementChild.cloneNode(true);

      // data-field="self" → use the item value directly
      clone.querySelectorAll("[data-field]").forEach((fEl) => {
        const key = fEl.dataset.field;
        const v = key === "self" ? item : item?.[key];
        if (typeof v === "string") fEl.textContent = v;
      });

      // data-field-list="projects" → build <li>s from item[projects]
      clone.querySelectorAll("[data-field-list]").forEach((fEl) => {
        const key = fEl.dataset.fieldList;
        const arr = item?.[key];
        if (!Array.isArray(arr)) return;
        fEl.innerHTML = "";
        arr.forEach((v) => {
          const li = document.createElement("li");
          li.textContent = String(v);
          fEl.appendChild(li);
        });
      });

      // If the template root itself has data-field, treat the item as that value
      if (clone.hasAttribute("data-field") && clone.dataset.field === "self") {
        clone.textContent = String(item);
      }

      // data-field-attr="key|attrName" → write item[key] to attrName on the element.
      // Applies to the clone root and descendants. Used to drive CSS selectors
      // (e.g. severity="critical" → [data-severity="critical"]).
      const applyFieldAttr = (fEl) => {
        const spec = fEl.getAttribute("data-field-attr");
        if (!spec) return;
        const [key, attrName] = spec.split("|");
        if (!key || !attrName) return;
        const v = item?.[key];
        if (v != null) fEl.setAttribute(attrName, String(v));
      };
      if (clone.hasAttribute("data-field-attr")) applyFieldAttr(clone);
      clone.querySelectorAll("[data-field-attr]").forEach(applyFieldAttr);

      container.appendChild(clone);
    });
  });
}

// ---------- Text fallback ----------

function buildTextFallback(data) {
  const host = document.querySelector("[data-text-fallback]");
  if (!host) return;

  const h = (tag, content, cls) => {
    const el = document.createElement(tag);
    if (cls) el.className = cls;
    if (typeof content === "string") el.textContent = content;
    return el;
  };

  const sections = [
    {
      heading: data.liftoff.kicker,
      title: data.liftoff.title.replace(/\n/g, " "),
      body: data.liftoff.subtitle,
    },
    {
      heading: data.whyNow.heading,
      body: [
        data.whyNow.lede,
        ...data.whyNow.sections.flatMap((s) => s.body || []),
        data.whyNow.gallery?.text,
      ]
        .filter(Boolean)
        .join(" "),
      counter: data.whyNow.counter,
    },
    {
      heading: data.actors.heading,
      body: [
        data.actors.lede,
        ...data.actors.sections.flatMap((s) => s.body || []),
      ].join(" "),
    },
    {
      heading: data.governance.heading,
      body: [data.governance.lede, ...(data.governance.intro || [])].join(" "),
    },
    {
      heading: data.regNet?.heading || "Two systems",
      body: data.regNet?.lede,
      items: [
        `${data.regNet?.spaceCluster?.label || "Space treaties"}: ${(data.regNet?.spaceCluster?.nodes || []).map((n) => `${n.name} (${n.year})`).join("; ")}`,
        `${data.regNet?.aiCluster?.label || "AI regulation"}: ${(data.regNet?.aiCluster?.nodes || []).map((n) => `${n.name} (${n.year})`).join("; ")}`,
        `What falls between: ${(data.regNet?.chasmLabels || []).join("; ")}`,
      ],
      closer: data.regNet?.closer,
    },
    {
      heading: data.futures.heading,
      body: [
        data.futures.lede,
        ...(data.futures.geopolitics?.intro || []),
        ...(data.futures.geopolitics?.shifts || []).map(
          (s) => `${s.title} ${s.body} ${s.indicator || ""}`
        ),
        data.futures.geopolitics?.closer,
      ]
        .filter(Boolean)
        .join(" "),
    },
    {
      heading: data.timeline?.heading || "Upcoming developments",
      items: (data.timeline?.columns || []).flatMap((col) => [
        ...col.top.map((ev) => `${col.year} — ${ev.text}`),
        ...col.bottom.map((ev) => `${col.year} — ${ev.text}`),
      ]),
    },
    {
      heading: data.openQuestions?.heading || "Open questions",
      body: data.openQuestions?.lede,
      items: (data.openQuestions?.items || []).map(
        (q) => `${q.title} — ${q.question} ${q.body}`
      ),
      closer: `${data.futures.closer.line} ${data.futures.closer.cta}`,
    },
  ];

  sections.forEach((s) => {
    if (s.heading) host.appendChild(h("h3", s.heading));
    if (s.title) host.appendChild(h("p", s.title));
    if (s.body) host.appendChild(h("p", s.body));
    if (s.items) {
      const ul = document.createElement("ul");
      s.items.forEach((i) => ul.appendChild(h("li", i)));
      host.appendChild(ul);
    }
    if (s.questions) {
      const ol = document.createElement("ol");
      s.questions.forEach((q) => ol.appendChild(h("li", q)));
      host.appendChild(ol);
    }
    if (s.counter) host.appendChild(h("p", s.counter));
    if (s.closer) host.appendChild(h("p", s.closer));
  });

  document.getElementById("text-version").hidden = false;
}

// ---------- Boot ----------

function boot() {
  // 1. Bind copy before anything else reads the DOM
  bindCopy(document, copy);

  // Meta title from copy
  document.title = copy.meta.title;
  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta && copy.meta.description) descMeta.setAttribute("content", copy.meta.description);

  // 2. Build text fallback (always present, revealed via skip link)
  buildTextFallback(copy);

  // 3. If reduced motion, stop here — the linear DOM order is already readable.
  if (prefersReducedMotion()) {
    document.body.classList.add("reduced-motion");
    return;
  }

  // 4. Boot the stage
  const stageEl = document.querySelector(".stage");
  const canvas = document.querySelector(".starfield");
  const rocket = document.querySelector(".rocket");
  const hud = document.querySelector(".hud-altitude");
  const launchpad = document.querySelector(".launchpad");
  const orbitsGroup = document.querySelector(".sats");

  const stage = new Stage({
    root: document.documentElement,
    canvas,
    rocket,
    hud,
    hint: null,
    launchpad,
    orbitsGroup,
  });

  // 5. Scene controllers
  const sceneDefs = [
    { id: "liftoff",       create: createLiftoffScene },
    { id: "whyNow",        create: createWhyNowScene },
    { id: "gallery",       create: createGalleryScene },
    { id: "actors",        create: createActorsScene },
    { id: "governance",    create: createGovernanceScene },
    { id: "regNet",        create: createRegNetScene },
    { id: "futures",       create: createFuturesScene },
    { id: "timeline",      create: createTimelineScene },
    { id: "openQuestions", create: createOpenQuestionsScene },
    { id: "closer",        create: createCloserScene },
  ];

  const sceneEls = sceneDefs.map(({ id, create }) => {
    const el = document.querySelector(`[data-scene="${id}"]`);
    const [a, b] = el.dataset.range.split(",").map(Number);
    return { id, el, range: [a, b], ctrl: create(el) };
  });

  // Also cache the scene-inner for the base fade
  for (const s of sceneEls) {
    s.inner = s.el.querySelector(".scene-inner");
  }


  // 6. Scroll engine
  const track = document.getElementById("track");

  const engine = new ScrollEngine({
    track,
    scenes: sceneEls.map(({ id, el, range }) => ({ id, el, range })),
    onTick: ({ progress, perScene }) => {
      stage.update(progress);
      // Scene-inner opacity is controlled by CSS default (1). Ranges are
      // hand-picked percentages and no longer reflect where content falls
      // visually now that the articles are long-form, so JS-driven fades
      // would hide text that's already in view.
      for (let i = 0; i < sceneEls.length; i++) {
        sceneEls[i].ctrl.update(perScene[i].sub, progress);
      }
    },
  });

  // 7. React to user toggling reduced-motion mid-session
  onReducedMotionChange((reduce) => {
    if (reduce) window.location.reload();
  });

  // Expose for debugging in the console
  if (typeof window !== "undefined") {
    window.__opEd = { stage, engine, copy };
  }
}

// Run on DOM ready (works for `defer`/`module` loading too)
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
