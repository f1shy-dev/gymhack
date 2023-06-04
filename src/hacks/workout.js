import { $ } from "../modules/dom";

export const workoutHack = (event) => {
  const card = $(".hack.card.main_card");
  const target = event ? event.target : document.activeElement;

  const answer = target.getAttribute("data-answer") || "No answer detected";
  if (target.nodeName == "SELECT") {
    const ddAnswer =
      target.querySelector(`option[value="${answer}"]`).innerHTML ?? answer;
    return (card.innerHTML = ddAnswer);
  }

  if ($("game-wrap.active .game-box") && target.getAttribute("data-couple")) {
    const couple = target.getAttribute("data-couple");
    const match = Array.from(
      $(".game-wrap.active .game-box").querySelectorAll(
        `[data-couple="${couple}"]`
      )
    ).filter((i) => i != target)[0] || { innerHTML: "No answer detected" };
    const matchAnswer =
      match.getAttribute("data-answer") ||
      match.innerHTML ||
      "No answer detected";
    return (card.innerHTML = `Match: ${matchAnswer}`);
  }

  card.innerHTML = answer;
};
