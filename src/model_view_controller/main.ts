import Controller from "./Controller";
import Model from "./Model";
import View from "./View";

const model = new Model();
const view = new View();
const controller = new Controller(view, model);

controller.number("1");
console.log(view.visor);
controller.add();
controller.number("2");
console.log(view.visor);
controller.add();
controller.number("3");
console.log(view.visor);
controller.equal();
console.log(view.visor);
