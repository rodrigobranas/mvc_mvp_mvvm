import Model from "./Model";
import View from "./View";

export default class Presenter {
	model: Model;
	view: View;

	constructor (view: View, model: Model) {
		this.model = model;
		this.view = view;
		this.view.setPresenter(this);
	}

	add () {
		this.view.visor = this.model.add(this.view.visor);
	}

	equal () {
		this.view.visor = this.model.equal(this.view.visor);
	}
}
