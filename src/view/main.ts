import View from "./View";

const view = new View();
view.click("1");
console.log(view.visor);
view.click("add");
view.click("2");
console.log(view.visor);
view.click("add");
view.click("3");
console.log(view.visor);
view.click("equal");
console.log(view.visor);
