import { init } from "./modules/init";
import { config } from "./config";
import { $ } from "./modules/dom";

(() => {
  const hackName = "";
  if (hackName && config[hackName]) return init(config[hackName]);

  const breadcrumb = $("ul.breadcrumb.ff-rockwell > li:last-child");
  if (!breadcrumb) return alert("Could not detect hack to use");

  if (breadcrumb.innerText == "Workout") return init(config.workout);
  if (breadcrumb.innerText == "Boxing") return init(config.boxing);

  alert("Could not detect hack to use");
})();
