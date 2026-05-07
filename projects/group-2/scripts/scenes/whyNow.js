// Scene 1 — Act I: the strategic case for datacenters in space.
//
// Editorial article. The scene fades in/out at its boundaries via
// --scene-active (handled globally); the body prose itself is static —
// there is no per-paragraph reveal, which would only flicker the copy.

export function createWhyNowScene(el) {
  const closer = el.querySelector(".act-para--closer");

  if (closer) {
    closer.style.opacity = "0";
    closer.style.transform = "translateY(8px)";
    closer.style.transition =
      "opacity 500ms var(--ease-out), transform 560ms var(--ease-out)";
  }

  return {
    update(sub) {
      if (closer) {
        const show = sub > 0.6;
        closer.style.opacity = show ? "1" : "0";
        closer.style.transform = show ? "translateY(0)" : "translateY(8px)";
      }
    },
  };
}
