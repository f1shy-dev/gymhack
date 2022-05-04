import { boxingHack } from "./hacks/boxing";
import { workoutHack } from "./hacks/workout";
import { baseTemplate } from "./modules/template";

export const config = {
  workout: {
    hackName: "Workout",
    eventUpdate: ["click"],
    execute: workoutHack,
    template: baseTemplate,
  },
  boxing: {
    hackName: "Boxing",
    fixedUpdate: 50,
    execute: boxingHack,
    template: baseTemplate,
  },
};
