export default class Person {
	constructor(name) {
		this._name = name;
	}

	sayHello() {
		return `Hello from ES6, ${this._name}`;
	}
}