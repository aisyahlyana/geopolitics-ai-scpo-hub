// Tiny math helpers shared across the stage and scene controllers.

export const clamp = (v, lo = 0, hi = 1) =>
  v < lo ? lo : v > hi ? hi : v;

export const lerp = (a, b, t) => a + (b - a) * t;

export const smoothstep = (t) => {
  const x = clamp(t, 0, 1);
  return x * x * (3 - 2 * x);
};

// Map a value from [inMin, inMax] to [outMin, outMax], clamped.
export const remap = (v, inMin, inMax, outMin, outMax) => {
  const t = clamp((v - inMin) / (inMax - inMin), 0, 1);
  return lerp(outMin, outMax, t);
};

// Parse "#rrggbb" -> [r, g, b]
export const hex = (h) => {
  const m = h.replace("#", "");
  return [
    parseInt(m.slice(0, 2), 16),
    parseInt(m.slice(2, 4), 16),
    parseInt(m.slice(4, 6), 16),
  ];
};

export const rgb = ([r, g, b]) =>
  `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;

export const mix = (a, b, t) => [
  lerp(a[0], b[0], t),
  lerp(a[1], b[1], t),
  lerp(a[2], b[2], t),
];

// Interpolate along a multi-stop colour ramp defined as [{ at, color: [r,g,b] }, ...]
export const rampColor = (stops, t) => {
  const x = clamp(t, 0, 1);
  for (let i = 0; i < stops.length - 1; i++) {
    const a = stops[i];
    const b = stops[i + 1];
    if (x >= a.at && x <= b.at) {
      const local = (x - a.at) / (b.at - a.at);
      return mix(a.color, b.color, smoothstep(local));
    }
  }
  return stops[stops.length - 1].color;
};
