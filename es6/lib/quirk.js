export default class Quirk {

	constructor() {
	}

	addAttributes(target) {
		for(var attributeKey in this) {
			if(typeof (this[attributeKey]) === "function") {
				Object.defineProperty(
					target,
					attributeKey,
					{
						enumerable: true,
						get: this[attributeKey]
					});
			} else if ((typeof (this[attributeKey]) === "object")
				&& (this[attributeKey].hasOwnProperty("get"))
				&& (this[attributeKey].hasOwnProperty("set"))) {
					Object.defineProperty(
						target,
						attributeKey,
						{
							enumerable: true,
							get: this[attributeKey].get,
							set: this[attributeKey].set
						});
			}else {
				target[attributeKey] = this[attributeKey];
			}
		}
		return target;
	}
}
