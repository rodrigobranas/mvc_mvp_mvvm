import Presenter from "./Presenter";

export default class View {
	presenter: Presenter | undefined;
	visor: string;

	constructor () {
		this.visor = "";
	}

	setPresenter (presenter: Presenter) {
		this.presenter = presenter;
	}
	
	add () {
		this.presenter?.add();
	}

	equal () {
		this.presenter?.equal();
	}

	number (text: string) {
		this.visor += text;
	}
}
