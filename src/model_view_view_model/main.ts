import View from "./View";

const view = new View();
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
