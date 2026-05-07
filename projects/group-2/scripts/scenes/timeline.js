// Scene 4.5 — "Upcoming developments" timeline pinned between Act IV
// and the closer. Renders a horizontal axis of years with events
// branching above (commercial / technical) and below (governance /
// policy). Same pinning + stage-mute pattern as the gallery scene.

import { copy } from "../../content/copy.js";

function el(tag, cls, text) {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text != null) node.textContent = text;
  return node;
}

function renderEvent(ev, band) {
  const li = el("li", `tl-event tl-event--${band}`);
  if (ev.highlight) li.classList.add("is-red");
  if (ev.ai) li.classList.add("is-ai");
  li.appendChild(el("span", "tl-event-text", ev.text));
  return li;
}

function renderColumn(col, idx) {
  const cell = el("li", "tl-column");
  cell.style.setProperty("--col", String(idx + 1));
  if (!col.top || col.top.length === 0) cell.classList.add("is-empty-top");
  if (!col.bottom || col.bottom.length === 0) cell.classList.add("is-empty-bottom");
  if (col.highlight) cell.setAttribute("data-highlight-year", "true");

  const top = el("ol", "tl-stack tl-stack--top");
  col.top.forEach((ev) => top.appendChild(renderEvent(ev, "top")));
  cell.appendChild(top);

  const year = el("p", "tl-year", col.year);
  if (col.highlight) year.classList.add("is-red");
  cell.appendChild(year);

  const bottom = el("ol", "tl-stack tl-stack--bottom");
  col.bottom.forEach((ev) => bottom.appendChild(renderEvent(ev, "bottom")));
  cell.appendChild(bottom);

  return cell;
}

export function createTimelineScene(scene) {
  const grid = scene.querySelector("[data-timeline-grid]");
  const sticky = scene.querySelector(".timeline-sticky");
  const data = copy.timeline;

  if (grid && data?.columns) {
    const list = el("ol", "tl-columns");
    list.style.setProperty("--n", String(data.columns.length));
    data.columns.forEach((c, i) => list.appendChild(renderColumn(c, i)));
    grid.appendChild(list);
  }

  // Mute the stage (cluster) while the timeline is pinned, so the
  // chart owns the screen — same trick as the gallery.
  if (sticky && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          document.body.classList.toggle("stage-muted", entry.isIntersecting);
        }
      },
      { threshold: 0, rootMargin: "-25% 0px -25% 0px" }
    );
    io.observe(sticky);
  }

  return { update() {} };
}
