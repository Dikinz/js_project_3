export const randomInteger = function (min, max) {
	let rand = min - 0.5 + Math.random() * (max - min + 1);
	return Math.round(rand);

}

export  function getNodeValue(selector, key = "value") {
	return document.querySelector(selector)[key]
}