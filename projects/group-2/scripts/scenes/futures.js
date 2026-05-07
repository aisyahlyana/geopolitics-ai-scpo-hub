// Scene 4 — What This Means for the Geopolitics of AI.
// The geopolitics prose is static; only the closer fades in near the end.

export function createFuturesScene(el) {
  const closer = el.querySelector(".closer");

  if (closer) {
    closer.style.opacity = "0";
    closer.style.transform = "translateY(18px)";
    closer.style.transition = "opacity 520ms var(--ease-out), transform 560ms var(--ease-out)";
  }

  return {
    update(sub) {
      if (closer) {
        const show = sub > 0.7;
        closer.style.opacity = show ? "1" : "0";
        closer.style.transform = show ? "translateY(0)" : "translateY(14px)";
      }
    },
  };
}
