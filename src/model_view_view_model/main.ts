import ViewModel from "./ViewModel";
import Model from "./Model";
import View from "./View";

const model = new Model();
const view = new View();
new ViewModel(view, model);

view.number("1");
console.log(view.visor);
view.add();
view.number("2");
console.log(view.visor);
view.add();
view.number("3");
console.log(view.visor);
view.equal();
console.log(view.visor);
