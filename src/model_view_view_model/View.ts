import Observer from "./Observer";
import ViewModel from "./ViewModel";

export default class View implements Observer {
	state: any;
	visor: string;

	constructor () {
		const viewModel = new ViewModel();
		viewModel.attach(this);
		this.state = viewModel.state
		this.visor = "";
	}
	
	number (text: string) {
		this.state.number(text);
	}
	
	add () {
		this.state.add();
	}
	
	equal () {
		this.state.equal();
	}

	update(): void {
		this.visor = this.state.visor;
	}
}
