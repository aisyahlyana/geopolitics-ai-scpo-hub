// Scene 4.75 — Open questions, six flip-cards in a 3x2 grid.
//
// Each card is a <button> so it's keyboard-operable for free. Click /
// space / enter toggles `is-flipped`; CSS handles the 3D transform.

export function createOpenQuestionsScene(scene) {
  const buttons = scene.querySelectorAll(".oq-flipper");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const flipped = btn.classList.toggle("is-flipped");
      btn.setAttribute("aria-pressed", flipped ? "true" : "false");
    });
  });

  return { update() {} };
}
