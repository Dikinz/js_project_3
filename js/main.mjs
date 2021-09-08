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

import { data } from "./mocs.mjs";
import { getPins} from './pins.js';
import { setFiltersListener } from './filters.js';



let filteredData = data

setFiltersListener(data, filteredData)

getPins(filteredData)




/* const housingTypeSelector = document.querySelector('#housingtype')
housingTypeSelector.addEventListener('change', (e) => {
	console.log('select');
}) */

/* const offer = data.map((it, i) => {
	return it.offer
})

console.log(offer); */
