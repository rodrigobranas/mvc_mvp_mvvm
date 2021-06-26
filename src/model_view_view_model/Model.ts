export default class Model {
	operation: string;
	total: number;

	constructor () {
		this.operation = "";
		this.total = 0;
	}

	add (visor: string) {
		this.total = this.total + parseInt(visor);
		this.operation = "add";
		return "";
	}

	equal (visor: string) {
		if (this.operation === "add") this.add(visor);
		return this.total.toString();
	}
}
