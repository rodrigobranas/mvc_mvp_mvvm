import Model from "./Model";
import Presenter from "./Presenter";

export default class View {
    visor: string;
    presenter: Presenter | undefined;

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
