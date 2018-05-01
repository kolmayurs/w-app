import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/reduxActions';
import '../css/style.css';

const mapStateToProps = (state) => {
  return{
    fetching: state.info.fetching,
    data: state.info.weather,
    city: [state.info.city],
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    ...bindActionCreators({fetchWeather}, dispatch)
  }
}

class App extends React.Component {
  componentWillMount(){
    this.props.fetchWeather();
/*    var curdate = new Date(null);
curdate.setTime(1525078800*1000);
alert(curdate.toLocaleString());*/
  }
  render() {
    const city = this.props.city.map((cities,i) =>{
      return(
        <h1 key={'city' + i}>Weather in {cities.name}, {cities.country}</h1>
        )
    })

    const weather_data = this.props.data.map((date,i) =>{
       let curdate = new Date(null);
       curdate.setTime(date.dt*1000);
      return(
        <h1 key={'date' + i}>{curdate.toLocaleString()}</h1>
        )
    })
    return (
      <div className="main_container">
          <div className="weather_container">
          {city}
            {weather_data}
          </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
