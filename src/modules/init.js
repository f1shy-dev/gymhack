import { loadStyles } from "./styles";
import { $ } from "./dom";

export const init = (conf) => {
  console.log(`Initializing hack: ${conf.hackName}`);
  let hidden = false;

  $('[data-target="#bugModel"]').style.display = "none";
  loadStyles();
  $("body").appendChild(conf.template(conf));

  document.addEventListener("keydown", (e) => {
    if ((e.key == "h" || e.key == "H") && e.ctrlKey) {
      e.preventDefault();
      $(".hack.base").style.display =
        $(".hack.base").style.display == "none" ? "block" : "none";
      hidden = !hidden;
    }
  });

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
