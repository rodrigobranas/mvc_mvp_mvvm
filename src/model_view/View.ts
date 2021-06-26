import Model from "./Model";

export default class View {
	model: Model;
	visor: string;

	constructor (model: Model) {
		this.model = model;
		this.visor = "";
	}

	click (text: string) {
		if (text === "add") {
			this.visor = this.model.add(this.visor);
			return;
		}
		if (text === "equal") {
			this.visor = this.model.equal(this.visor);
			return;
		}
		this.visor += text;
	}
}
