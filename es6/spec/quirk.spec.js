import Quirk from "../lib/quirk.js";

describe("Quirk", () => {
	let object,
			quirk;

	before(() => {
		object = {};
		quirk = new Quirk();
	});

	it("should allow simple values to be attached", () => {
		quirk.simpleValue = 10;

		quirk.addAttributes(object);

		object.simpleValue.should.eql(10);
	});

	it("should allow simple returnable functions to be attached", () => {
		quirk.simpleFunction = function () {
			return 20;
		};

		quirk.addAttributes(object);

		object.simpleFunction.should.eql(20);
	});

	it("should allow a get & set combo to be attached", () => {
		quirk.someValue = 30;

		quirk.getSetCombo = {
			get: function () {
				return this.someValue;
			},
			set: function (value) {
				this.someValue = value + 10;
			}
		};

		object.getSetCombo = 40;

		object.someValue.should.eql(50);
	});

	// TODO: Async
});
