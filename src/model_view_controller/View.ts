import Controller from "./Controller";

export default class View {
	controller: Controller | undefined;
	visor: string;

	constructor () {
		this.visor = "";
	}

	setController (controller: Controller) {
		this.controller = controller;
	}
	
	add () {
		this.controller?.add();
	}

	equal () {
		this.controller?.equal();
	}

	number (text: string) {
		this.visor += text;
	}
}
