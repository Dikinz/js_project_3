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
import {getPins} from './pins.js';

console.log(data, 'main');

getPins(data)