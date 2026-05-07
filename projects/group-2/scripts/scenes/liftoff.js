// Scene 0 — Liftoff.
// Opacity is handled by the global scene crossfade in main.js. This scene
// only contributes a gentle parallax: the headline drifts upward slightly
// as the rocket builds thrust, then the global crossfade takes over at the
// scene boundary.

import { smoothstep, remap } from "../util/lerp.js";

export function createLiftoffScene(el) {
  const display = el.querySelector(".display");
  const subtitle = el.querySelector(".subtitle");
  const byline = el.querySelector(".byline");

  return {
    update(sub) {
      const y = -smoothstep(remap(sub, 0.3, 1.0, 0, 1)) * 24;
      const t = `translateY(${y.toFixed(1)}px)`;
      if (display) display.style.transform = t;
      if (subtitle) subtitle.style.transform = t;
      if (byline) byline.style.transform = t;
    },
  };
}
