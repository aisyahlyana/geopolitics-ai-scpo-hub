// Scene 1.5 — Pinned gallery moment between Act I and Act II.
//
// Uses a sticky inner container so the split layout (text on the left,
// 4-image grid on the right) parks against the viewport while the reader
// scrolls through the scene's range.
//
// Two behaviours layered here:
//   1. Image highlighting — driven by scene sub-progress. Each of the four
//      cells gets roughly a quarter of the scroll dwell.
//   2. Stage muting — the rocket and cluster fade out whenever the sticky
//      panel is actually pinned in the viewport. We use IntersectionObserver
//      (rather than sub-progress) because the sticky pin duration depends on
//      content height vs. range width, and the observer gives us a direct
//      read on "is this panel on-screen right now".

export function createGalleryScene(el) {
  const cells = Array.from(el.querySelectorAll(".gallery-cell"));
  const sticky = el.querySelector(".gallery-sticky");
  const MUTE_CLASS = "stage-muted";

  // All four frames are equally load-bearing, so give them all the red
  // treatment rather than cycling a single highlight.
  cells.forEach((c) => c.classList.add("is-active"));

  if (sticky && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          document.body.classList.toggle(MUTE_CLASS, entry.isIntersecting);
        }
      },
      { threshold: 0, rootMargin: "-25% 0px -25% 0px" }
    );
    io.observe(sticky);
  }

  return { update() {} };
}
