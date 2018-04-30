export default function info(state={
	fetching: false,
	fetched: false,
	lat: 0,
	weather:[],
	city:[],
	error: null
},action){
	switch(action.type){
		case 'GEO_LOCATION_START' : {
			return {...state, fetching: true}
		}
		case 'GEO_LOCATION_SUCEESS' : {
			return {...state, fetching: false, fetched: true, lat: action.lat, lon: action.lon }
		}
		case 'GEO_LOCATION_ERROR' : {
			return {...state, fetching: false, fetched: false, error: action.payload }
		}
		case 'IP_LOCATION_START' : {
			return {...state, fetching: true}
		}
		case 'IP_LOCATION_SUCEESS' : {
			return {...state, fetching: false, fetched: true, lat: action.lat, lon: action.lon }
		}
		case 'IP_LOCATION_ERROR' : {
			return {...state, fetching: false, fetched: false, error: action.payload }
		}
		case 'FETCH_WEATHER_START' : {
			return {...state, fetching: true}
		}
		case 'FETCH_WEATHER_SUCEESS' : {
			return {...state, fetching: false, fetched: true, weather: action.weather, city: action.city }
		}
		case 'FETCH_WEATHER_ERROR' : {
			return {...state, fetching: false, fetched: false, error: action.payload }
		}
		default : {
			return {...state}
		}
	}
}