// Scroll engine.
//
// Produces a single `progress` value (0..1) that represents the reader's
// position along the scroll track. Also derives per-scene sub-progress.

import { clamp } from "./lerp.js";

export class ScrollEngine {
  constructor({ track, scenes, onTick }) {
    this.track = track;
    this.scenes = scenes; // [{ el, id, range: [a,b] }]
    this.onTick = onTick;
    this.progress = 0;
    this.ticking = false;

    this._onScroll = this._onScroll.bind(this);
    this._onResize = this._onResize.bind(this);

    this._layout();
    this._tick(true);

    window.addEventListener("scroll", this._onScroll, { passive: true });
    window.addEventListener("resize", this._onResize);
    window.addEventListener("orientationchange", this._onResize);
  }

  _layout() {
    // Scene heights are determined by content — no forced heights needed.
  }

  _onResize() {
    this._layout();
    this._tick(true);
  }

  _onScroll() {
    if (this.ticking) return;
    this.ticking = true;
    requestAnimationFrame(() => {
      this._tick(false);
      this.ticking = false;
    });
  }

  _tick(force) {
    const rect = this.track.getBoundingClientRect();
    const total = this.track.offsetHeight - window.innerHeight;
    const scrolled = -rect.top;
    const p = total > 0 ? clamp(scrolled / total, 0, 1) : 0;

    if (!force && Math.abs(p - this.progress) < 0.0005) return;
    this.progress = p;

    // Find active scene + sub-progress
    let active = this.scenes[0];
    for (const s of this.scenes) {
      const [a, b] = s.range;
      if (p >= a && p <= b) {
        active = s;
        break;
      }
      if (p > b) active = s; // keep the last one we've passed
    }

    const perScene = this.scenes.map((s) => {
      const [a, b] = s.range;
      const sp = clamp((p - a) / (b - a), 0, 1);
      return { id: s.id, el: s.el, range: s.range, sub: sp };
    });

    this.onTick({
      progress: p,
      activeId: active.id,
      perScene,
    });
  }
}
