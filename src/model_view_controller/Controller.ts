import Model from "./Model";
import View from "./View";

export default class Controller {
	model: Model;
	view: View;

	constructor (view: View, model: Model) {
		this.model = model;
		this.view = view;
		this.view.setController(this);
	}

	add () {
		this.view.visor = this.model.add(this.view.visor);
	}

	equal () {
		this.view.visor = this.model.equal(this.view.visor);
	}

	number (text: string) {
		this.view.visor += text;
	}
}
