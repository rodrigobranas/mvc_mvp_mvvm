export default class View {
	visor: string;
	operation: string;
	total: number;

	constructor () {
		this.visor = "";
		this.operation = "";
		this.total = 0;
	}

	add () {
		this.total = this.total + parseInt(this.visor);
		this.operation = "add";
		this.visor = "";
	}

	equal () {
		if (this.operation === "add") this.add();
		this.visor = this.total.toString();
	}

	click (text: string) {
		if (text === "add") {
			return this.add();
		}
		if (text === "equal") {
			return this.equal();
		}
		this.visor += text;
	}
}
