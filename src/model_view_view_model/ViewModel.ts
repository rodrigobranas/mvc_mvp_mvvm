import Model from "./Model";
import Observable from "./Observable";
import Observer from "./Observer";

export default class ViewModel implements Observable {
	state: any;
	observers: Observer[];

	constructor () {
		const model = new Model();
		this.state = {};
		this.state.visor =  "";
		this.state.number = (text: string) => {
			this.state.visor += text;
			this.notifyAll();
		};
		this.state.add = () => {
			this.state.visor = model.add(this.state.visor);
			this.notifyAll();
		};
		this.state.equal = () => {
			this.state.visor = model.equal(this.state.visor);
			this.notifyAll();
		};
		this.observers = [];
	}
	
	attach (observer: Observer) {
		this.observers.push(observer);
	}

	notifyAll(): void {
		for (const observer of this.observers) {
			observer.update();
		}
	}
}
