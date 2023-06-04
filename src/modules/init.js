import { loadStyles } from "./styles";
import { $ } from "./dom";

export const init = (conf) => {
  console.log(`Initializing hack: ${conf.hackName}`);
  let hidden = false;
  let mouseTP = false;

  $('[data-target="#bugModel"]').style.display = "none";
  loadStyles();
  // check if template is already loaded
  if ($(".hack.base")) $(".hack.base").remove();

  $("body").appendChild(conf.template(conf));

  const teleportToMouse = (e) => {
    if (hidden || !mouseTP) return;
    const card = $(".hack.main_card");
    card.style.left = `${e.clientX + 64}px`;
    card.style.top = `${e.clientY + 32}px`;
  };

  document.addEventListener("keydown", (e) => {
    if ((e.key == "h" || e.key == "H") && e.ctrlKey) {
      console.log("Hiding hack");
      e.preventDefault();
      $(".hack.base").style.display =
        $(".hack.base").style.display == "none" ? "block" : "none";
      hidden = !hidden;
    }

    // ctrl m to attach the hack window to the mouse
    if ((e.key == "m" || e.key == "M") && e.ctrlKey) {
      console.log("Toggle Mouse mode");
      e.preventDefault();
      mouseTP = !mouseTP;
      const card = $(".hack.main_card");

      if (!mouseTP) card.classList.remove("teleport");
      else card.classList.add("teleport");
    }
  });

  document.addEventListener("mousemove", teleportToMouse);

  const hack = () => {
    conf.execute(null, hidden);
    conf.fixedUpdate && setTimeout(hack, conf.fixedUpdate);
  };
  if (conf.eventUpdate)
    conf.eventUpdate.forEach((e) =>
      document.addEventListener(e, (evt) => conf.execute(evt, hidden), true)
    );
  if (conf.fixedUpdate) hack();
};
