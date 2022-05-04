export const workoutHack = (event) => {
  const card = document.querySelector(".hack.card.main_card");
  const target = event ? event.target : document.activeElement;

  if (card.innerHTML == target.getAttribute("data-answer")) return;
  card.innerHTML = target.getAttribute("data-answer") || "No answer detected";
};
