import { $ } from "../modules/dom";

export const verbTrainer = (evt, hidden) => {
  const card = $(".hack.card.main_card");
  const elem = $("#verb-trainer-inputanswer");

  if (!elem) return (card.innerHTML = "No answer detected");
  return (card.innerHTML =
    elem.getAttribute("data-answer") || "No answer detected");
};
