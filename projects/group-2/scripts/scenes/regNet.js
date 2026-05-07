// Scene 3.5 — Regulation network ("the severed web").
//
// Two clusters of regulatory frameworks sit either side of a chasm.
// Solid edges are formal ties within each cluster. Ghost edges are
// the bridges that don't actually exist between the two systems —
// drawn faded by default, briefly attempted on beat 4 (where they
// fail), then settled. Chasm labels appear on beat 5 listing the
// concrete regulatory gaps that fall between the systems.
//
// Hovering a node reveals a small panel with the analysis (relevance
// to AI in space, plus the principal gaps).
//
// The reader scrolls; the controller computes its own progress from
// the scene's bounding rect and drives `data-beat` on the frame.

import { copy } from "../../content/copy.js";

const SVG_NS = "http://www.w3.org/2000/svg";
const VB_W = 1200;
const VB_H = 620;

function svg(tag, attrs = {}) {
  const el = document.createElementNS(SVG_NS, tag);
  for (const k in attrs) el.setAttribute(k, attrs[k]);
  return el;
}

function nodeIndex(cluster) {
  const m = new Map();
  cluster.nodes.forEach((n) => m.set(n.id, n));
  return m;
}

function renderCluster(g, cluster, side) {
  const idx = nodeIndex(cluster);

  // Edges first so nodes paint over them.
  cluster.edges.forEach((e) => {
    const a = idx.get(e.from);
    const b = idx.get(e.to);
    if (!a || !b) return;
    const cls = `rn-edge rn-edge--${side}` + (e.soft ? " is-soft" : "") + (e.weak ? " is-weak" : "");
    g.appendChild(svg("line", {
      x1: a.x, y1: a.y, x2: b.x, y2: b.y, class: cls,
    }));
  });

  cluster.nodes.forEach((n) => {
    const group = svg("g", {
      class: `rn-node rn-node--${side}` + (n.anchor ? " is-anchor" : "") + (n.soft ? " is-soft" : "") + (n.weak ? " is-weak" : ""),
      "data-node": n.id,
      "data-side": side,
      transform: `translate(${n.x},${n.y})`,
      tabindex: "0",
      role: "button",
      "aria-label": `${n.name}, ${n.year}. ${n.desc || ""}`,
    });
    const r = n.anchor ? 24 : 13;
    // Invisible larger hit-zone so it's easy to hover/tap small nodes.
    group.appendChild(svg("circle", { r: Math.max(r + 14, 28), class: "rn-node-hit" }));
    group.appendChild(svg("circle", { r, class: "rn-node-dot" }));

    // Anchors lean their labels outward (away from the chasm). Other
    // nodes drop their label below the dot.
    const labelDx = n.anchor ? (side === "space" ? -36 : 36) : 0;
    const labelDy = n.anchor ? 6 : (r + 16);
    const anchor = n.anchor ? (side === "space" ? "end" : "start") : "middle";
    const name = svg("text", {
      x: labelDx, y: labelDy, class: "rn-node-label", "text-anchor": anchor,
    });
    name.textContent = n.name;
    group.appendChild(name);
    const year = svg("text", {
      x: labelDx, y: labelDy + 14, class: "rn-node-year", "text-anchor": anchor,
    });
    year.textContent = n.year;
    group.appendChild(year);
    g.appendChild(group);
  });
}

function renderGhostEdges(g, ghosts, spaceIdx, aiIdx) {
  ghosts.forEach((e) => {
    const a = spaceIdx.get(e.from) || aiIdx.get(e.from);
    const b = aiIdx.get(e.to) || spaceIdx.get(e.to);
    if (!a || !b) return;
    // Curve through the chasm with a vertical offset that depends on
    // each line's y position, so they don't pile on top of each other
    // or sit directly on the chasm labels.
    const mx = (a.x + b.x) / 2;
    const my = (a.y + b.y) / 2;
    const lift = ((a.y + b.y) / 2 - VB_H / 2) * -0.22;
    const path = `M ${a.x} ${a.y} Q ${mx} ${my + lift} ${b.x} ${b.y}`;
    g.appendChild(svg("path", { d: path, class: "rn-ghost" }));
  });
}

function renderChasmLabels(g, labels) {
  // Header at the top of the chasm column — frames the labels as the
  // explicit list of regulatory gaps, not just floating text.
  const header = svg("text", {
    x: VB_W / 2, y: 60, class: "rn-chasm-header", "text-anchor": "middle",
  });
  header.textContent = "What falls between";
  g.appendChild(header);

  // Distribute labels vertically through the central column.
  const top = 110;
  const bottom = VB_H - 90;
  const span = bottom - top;
  const step = labels.length > 1 ? span / (labels.length - 1) : 0;
  labels.forEach((text, i) => {
    const y = top + step * i;
    const row = svg("g", {
      class: "rn-chasm-row",
      transform: `translate(${VB_W / 2}, ${y})`,
    });
    // Two red leading dashes flanking the label, so each "what falls
    // between" reads as a marked statement rather than floating text.
    const dashLen = 12;
    const dashGap = 90; // half-distance from centre to where the dash begins
    row.appendChild(svg("line", {
      x1: -dashGap - dashLen, y1: 0, x2: -dashGap, y2: 0, class: "rn-chasm-marker",
    }));
    row.appendChild(svg("line", {
      x1: dashGap, y1: 0, x2: dashGap + dashLen, y2: 0, class: "rn-chasm-marker",
    }));
    const t = svg("text", {
      x: 0, y: 5, class: "rn-chasm-label", "text-anchor": "middle",
    });
    t.textContent = text;
    row.appendChild(t);
    g.appendChild(row);
  });
}

function renderNetwork(host, data) {
  const root = svg("svg", {
    class: "regnet-svg",
    viewBox: `0 0 ${VB_W} ${VB_H}`,
    preserveAspectRatio: "xMidYMid meet",
    role: "img",
    "aria-label": "Network diagram of space treaties on the left and AI regulation on the right, with ghost edges showing the connections that don't bind.",
  });

  // Quiet chasm wash — no border, just a faint red tint to mark the
  // void between the two systems. Sits behind everything.
  root.appendChild(svg("rect", {
    x: 440, y: 60, width: 320, height: VB_H - 120,
    class: "rn-chasm-bg",
  }));

  const gGhost = svg("g", { class: "rn-ghosts" });
  const gSpace = svg("g", { class: "rn-cluster rn-cluster--space" });
  const gAI = svg("g", { class: "rn-cluster rn-cluster--ai" });
  const gChasm = svg("g", { class: "rn-chasm" });

  renderCluster(gSpace, data.spaceCluster, "space");
  renderCluster(gAI, data.aiCluster, "ai");
  renderGhostEdges(gGhost, data.ghostEdges, nodeIndex(data.spaceCluster), nodeIndex(data.aiCluster));
  renderChasmLabels(gChasm, data.chasmLabels);

  root.appendChild(gGhost);
  root.appendChild(gSpace);
  root.appendChild(gAI);
  root.appendChild(gChasm);

  host.innerHTML = "";
  host.appendChild(root);
  return root;
}

function buildIndex(data) {
  const m = new Map();
  data.spaceCluster.nodes.forEach((n) => m.set(n.id, n));
  data.aiCluster.nodes.forEach((n) => m.set(n.id, n));
  return m;
}

function attachTooltip(svgRoot, tooltipEl, data) {
  if (!tooltipEl) return;
  const idx = buildIndex(data);
  const nameEl = tooltipEl.querySelector("[data-rn-tip-name]");
  const metaEl = tooltipEl.querySelector("[data-rn-tip-meta]");
  const textEl = tooltipEl.querySelector("[data-rn-tip-text]");

  function show(nodeId, target) {
    const n = idx.get(nodeId);
    if (!n) return;
    if (nameEl) nameEl.textContent = n.name;
    if (metaEl) metaEl.textContent = n.year || "";
    if (textEl) textEl.textContent = n.desc || "";
    tooltipEl.classList.add("is-visible");
    tooltipEl.setAttribute("aria-hidden", "false");
    // Position relative to the tooltip's offset parent (the stage wrap).
    const parent = tooltipEl.offsetParent || tooltipEl.parentElement;
    if (!parent) return;
    const parentRect = parent.getBoundingClientRect();
    const nodeRect = target.getBoundingClientRect();
    const tipW = tooltipEl.offsetWidth || 300;
    const tipH = tooltipEl.offsetHeight || 140;
    const cx = nodeRect.left - parentRect.left + nodeRect.width / 2;
    const cy = nodeRect.top - parentRect.top;
    let left = cx - tipW / 2;
    let top = cy - tipH - 14;
    // Keep within the parent's bounds; flip below the node if no room above.
    left = Math.max(8, Math.min(parentRect.width - tipW - 8, left));
    if (top < 8) top = cy + nodeRect.height + 14;
    tooltipEl.style.left = `${left}px`;
    tooltipEl.style.top = `${top}px`;
  }
  function hide() {
    tooltipEl.classList.remove("is-visible");
    tooltipEl.setAttribute("aria-hidden", "true");
  }

  svgRoot.querySelectorAll(".rn-node").forEach((g) => {
    const id = g.getAttribute("data-node");
    g.addEventListener("mouseenter", () => show(id, g));
    g.addEventListener("focus", () => show(id, g));
    g.addEventListener("mouseleave", hide);
    g.addEventListener("blur", hide);
  });
}

export function createRegNetScene(scene) {
  const data = copy.regNet;
  const stage = scene.querySelector("[data-regnet-stage]");
  const frame = scene.querySelector("[data-regnet-frame]");
  const captionEl = scene.querySelector("[data-regnet-caption]");
  const beatLabelEl = scene.querySelector("[data-regnet-beat-label]");
  const tooltipEl = scene.querySelector("[data-regnet-tooltip]");
  const sticky = scene.querySelector(".regnet-sticky");

  let svgRoot = null;
  if (stage && data) svgRoot = renderNetwork(stage, data);
  if (svgRoot && tooltipEl) attachTooltip(svgRoot, tooltipEl, data);

  const beats = data?.beats || [];
  let lastBeat = -1;
  function setBeat(idx) {
    if (idx === lastBeat) return;
    lastBeat = idx;
    const beatStr = String(idx + 1);
    if (frame) frame.dataset.beat = beatStr;
    // Mirror the beat onto the sticky panel so siblings of the frame
    // (the closer block) can react to the same selectors.
    if (sticky) sticky.dataset.beat = beatStr;
    if (captionEl) captionEl.textContent = beats[idx]?.caption || "";
    if (beatLabelEl) beatLabelEl.textContent = beats[idx]?.label || "";
  }
  setBeat(0);

  if (sticky && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          document.body.classList.toggle("stage-muted", entry.isIntersecting);
        }
      },
      { threshold: 0, rootMargin: "-20% 0px -20% 0px" }
    );
    io.observe(sticky);
  }

  return {
    update() {
      if (!beats.length) return;
      const rect = scene.getBoundingClientRect();
      const total = scene.offsetHeight - window.innerHeight;
      if (total <= 0) {
        setBeat(0);
        return;
      }
      const t = Math.max(0, Math.min(0.999, -rect.top / total));
      const idx = Math.min(beats.length - 1, Math.floor(t * beats.length));
      setBeat(idx);
    },
  };
}
