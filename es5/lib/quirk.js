"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Quirk = (function () {
	function Quirk() {
		_classCallCheck(this, Quirk);
	}

	_createClass(Quirk, [{
		key: "addAttributes",
		value: function addAttributes(target) {
			for (var attributeKey in this) {
				if (typeof this[attributeKey] === "function") {
					Object.defineProperty(target, attributeKey, {
						enumerable: true,
						get: this[attributeKey]
					});
				} else if (typeof this[attributeKey] === "object" && this[attributeKey].hasOwnProperty("get") && this[attributeKey].hasOwnProperty("set")) {
					Object.defineProperty(target, attributeKey, {
						enumerable: true,
						get: this[attributeKey].get,
						set: this[attributeKey].set
					});
				} else {
					target[attributeKey] = this[attributeKey];
				}
			}
			return target;
		}
	}]);

	return Quirk;
})();

exports["default"] = Quirk;
module.exports = exports["default"];