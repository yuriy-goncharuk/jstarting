import { View } from "./view";
import { Model } from "./model";
import { Controller } from "./controller";

window.addEventListener("DOMContentLoaded", function() {
  const view = new View();
  const model = new Model();
  const controller = new Controller();

  view.addObserver(controller);
  model.addObserver(controller);
  model.addObserver(view);
  controller.addObserver(model);
});
