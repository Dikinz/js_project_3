import { getNodeValue } from "./helpers.mjs";
import { getPins, removePins} from './pins.js';
const ANY = 'any'



export  function filter (rawData, config) {
	let filterData = rawData
	console.log(config);

	if(config.type !== ANY ) {
		
		filterData = filterData.filter((it) => it.offer.type === config.type )
		console.log(filterData);
	}
	if(config.price !== ANY ) {
		
		filterData = filterData.filter((it) => it.offer.price === config.price )
		console.log(filterData);
	}
	if(config.rooms !== ANY ) {
		
		filterData = filterData.filter((it) => it.offer.rooms === config.rooms )
		console.log(filterData);
	}
	if(config.guests !== ANY ) {
		
		filterData = filterData.filter((it) => it.offer.guests === config.guests )
		console.log(filterData);
	}

	return  filterData
}


export function setFiltersListener(data, filteredData) {
	const filterFormElement = document.querySelector('.map__filters')

	filterFormElement.addEventListener('change', (e) => {
		filteredData = filter(data, {
			type: getNodeValue('#housing-type'),
			price: getNodeValue('#housing-price'),
			rooms: getNodeValue('#housing-rooms'),
			guests: getNodeValue('#housing-guests'),
			wifi: getNodeValue('#filter-wifi', 'checked'),
			dishwasher: getNodeValue('#filter-dishwasher', 'checked'),
			parking: getNodeValue('#filter-parking', 'checked'),
			washer: getNodeValue('#filter-washer', 'checked'),
			elevator: getNodeValue('#filter-elevator', 'checked'),
			conditioner: getNodeValue('#filter-conditioner', 'checked'),
	
		})
		removePins()
		getPins(filteredData)
	
	})
	}

