"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _libQuirkJs = require("../lib/quirk.js");

var _libQuirkJs2 = _interopRequireDefault(_libQuirkJs);

describe("Quirk", function () {
	var component = undefined;

	before(function () {
		component = new _libQuirkJs2["default"]();
	});

	it("should say something", function () {
		component.saySomething().should.equal("Something");
	});
});