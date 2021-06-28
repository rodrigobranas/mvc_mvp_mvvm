import Observer from "./Observer";

export default interface Observable {
	attach (observer: Observer): void;
	notifyAll (): void;
}
