import axios from 'axios';

export function fetchWeather(){
	return function(dispatch){
		dispatch({type: 'GEO_LOCATION_START'})
    const geolocation = navigator.geolocation;
    if (!geolocation) {
      dispatch({type:'GET_LOCATION_ERROR', payload: 'Not Supported' })
      dispatch({type:'IP_LOCATION_START'})
      axios.get('http://ip-api.com/json')
      .then(res => {
	      	dispatch({type:'IP_LOCATION_SUCEESS', lat: res.data.lat, lon: res.data.lon})
	      	dispatch({type:'FETCH_WEATHER_START'})
	      	axios.get('http://api.openweathermap.org/data/2.5/forecast?lat='+res.data.lat+'&lon='+res.data.lon+'&appid=8124a644a4fab4b5c77b5fc1ae5ba6c5')
	      	.then(res => {
	      	dispatch({type:'FETCH_WEATHER_SUCEESS', weather: res.data.list, city: res.data.city})
	      	})
	      	.catch(err => {
		      	dispatch({type:'FETCH_WEATHER_ERROR', payload: err })
		      })
	      })
      .catch(err => {
      	dispatch({type:'IP_LOCATION_ERROR', payload: err })
      })
    }
    
    geolocation.getCurrentPosition((position) => {
        dispatch({type:'GET_LOCATION', latitude: position.coords.latitude, longitude: position.coords.longitude})
        dispatch({type:'FETCH_WEATHER_START'})
	      	axios.get('http://api.openweathermap.org/data/2.5/forecast?lat='+position.coords.latitude+'&lon='+position.coords.longitude+'&appid=8124a644a4fab4b5c77b5fc1ae5ba6c5')
	      	.then(res => {
	      	dispatch({type:'FETCH_WEATHER_SUCEESS', weather: res.data.list, city: res.data.city})
	      	})
	      	.catch(err => {
		      	dispatch({type:'FETCH_WEATHER_ERROR', payload: err })
		      })
    }, () => {
      dispatch({type:'GET_LOCATION_ERROR', payload: 'Permission denied'})
      dispatch({type:'IP_LOCATION_START'})
      axios.get('http://ip-api.com/json')
      .then(res => {
	      	dispatch({type:'IP_LOCATION_SUCEESS', lat: res.data.lat, lon: res.data.lon})
	      	dispatch({type:'FETCH_WEATHER_START'})
	      	axios.get('http://api.openweathermap.org/data/2.5/forecast?lat='+res.data.lat+'&lon='+res.data.lon+'&appid=8124a644a4fab4b5c77b5fc1ae5ba6c5')
	      	.then(res => {
	      	dispatch({type:'FETCH_WEATHER_SUCEESS', weather: res.data.list, city: res.data.city})
	      	})
	      	.catch(err => {
		      	dispatch({type:'FETCH_WEATHER_ERROR', payload: err })
		      })
	      })
      .catch(err => {
      	dispatch({type:'IP_LOCATION_ERROR', payload: err })
      })
    });
	}
}