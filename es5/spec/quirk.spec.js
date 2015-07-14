"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _libQuirkJs = require("../lib/quirk.js");

var _libQuirkJs2 = _interopRequireDefault(_libQuirkJs);

describe("Quirk", function () {
	var object = undefined,
	    quirk = undefined;

	before(function () {
		object = {};
		quirk = new _libQuirkJs2["default"]();
	});

	it("should allow simple values to be attached", function () {
		quirk.simpleValue = 10;

		quirk.addAttributes(object);

		object.simpleValue.should.eql(10);
	});

	it("should allow simple returnable functions to be attached", function () {
		quirk.simpleFunction = function () {
			return 20;
		};

		quirk.addAttributes(object);

		object.simpleFunction.should.eql(20);
	});

	it("should allow a get & set combo to be attached", function () {
		quirk.someValue = 30;

		quirk.getSetCombo = {
			get: function get() {
				return this.someValue;
			},
			set: function set(value) {
				this.someValue = value + 10;
			}
		};

		quirk.addAttributes(object);

		object.getSetCombo = 40;

		object.someValue.should.eql(50);
	});

	// TODO: Async
});