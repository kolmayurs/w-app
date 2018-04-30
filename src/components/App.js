import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/reduxActions';
import '../css/style.css';

const mapStateToProps = (state) => {
  return{
    fetching: state.info.fetching,
    data: state.info.weather,
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


    const weather_data = this.props.data.map((date,i) =>{
       let curdate = new Date(null);
       curdate.setTime(date.dt*1000);
      return(
        <h1 key={'date' + i}>{curdate.toLocaleString()}</h1>
        )
    })
    return (
      <div className="main_container">
      {weather_data}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
