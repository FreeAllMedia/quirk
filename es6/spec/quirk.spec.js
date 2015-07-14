import Quirk from "../lib/quirk.js";

describe("Quirk", () => {
	let component;

	before(() => {
		component = new Quirk();
	});

	it("should say something", () => {
		component.saySomething().should.equal("Something");
	});
});
