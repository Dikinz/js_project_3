// 'use strict';
//
// var fit = function (a, b) {
//   return a + b;
// };
//
// fit(2, 2);

//'use strict';
//var fit = (a, b) => {a + b};
//fit(2, 2);
function randomInteger(min, max) {
	let rand = min - 0.5 + Math.random() * (max - min + 1);
	return Math.round(rand);

}
randomInteger(3, 8)

let house = ['flat', 'house', 'bungalo'];

let mapPins = [];

for(let index = 0; index < 8; index++) {

	let pin = {
		"author": {
			"avatar": 'img/avatars/user01.png'
		},
		"offer": {
			"title": 'Гостиница',
			"address": "top: 400px, left: 800px", 
			"price": 1200,
			"type":  'palace', //flat, house или bungalo
			"rooms": 3, //число, количество комнат
			"guests": 2, //число, количество гостей, которое можно разместить
			"checkin": '12:00', //строка с одним из трёх фиксированных значений: 12: 00, 13: 00 или 14: 00,
			"checkout": '13:00', //строка с одним из трёх фиксированных значений: 12: 00, 13: 00 или 14: 00
			"features": ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],//массив строк случайной длины из ниже предложенных: 
			"description": 'some dscr' //строка с описанием,
		},
		"location": {
			"x": 400, //случайное число, координата x метки на карте.Значение ограничено размерами блока, в котором перетаскивается метка.
			"y": 800 //случайное число, координата y метки на карте от 130 до 630.
		}
	}
	pin.author.avatar = 'img/avatars/user0' + randomInteger(1, 8) + '.png';
	pin.offer.type = house[randomInteger(0,house.length -1)];
	mapPins.push(pin)
};

//mapPins.forEach((item, index) => {
//	item.author.avatar = 'img/avatars/user0' + (index + 1) + '.png'
//});

