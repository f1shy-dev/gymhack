import { boxingHack } from "./hacks/boxing";
import { verbTrainer } from "./hacks/verbtrainer";
import { workoutHack } from "./hacks/workout";
import { baseTemplate } from "./modules/template";

export const config = {
  workout: {
    hackName: "Workout",
    eventUpdate: ["click", "keydown", "mouseover"],
    execute: workoutHack,
    template: baseTemplate,
  },
  boxing: {
    hackName: "Boxing",
    fixedUpdate: 50,
    execute: boxingHack,
    template: baseTemplate,
  },
  verbTrainer: {
    hackName: "Verb Trainer",
    fixedUpdate: 50,
    execute: verbTrainer,
    template: baseTemplate,
  },
};
