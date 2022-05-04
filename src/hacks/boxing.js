export const boxingHack = (g, hidden) => {
  const card = document.querySelector(".hack.card.main_card");
  const bags = Game.BoxingBagTagTextGroup;
  if (bags.length === 0)
    return (card.innerHTML = "No answer detected (start boxing game)");

  bags.forEach((i) => (i.children[2].fill = "black"));
  const correctBag = bags.find(
    (i) => i.children[2]._text == Game.worddata.currentWord.translation
  );

  !hidden && (correctBag.children[2].fill = "green");
  card.innerHTML = correctBag.children[2]._text || "No answer detected";
};
