import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/reduxActions';

const mapStateToProps = (state) => {
  return{
    data: state.info.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    ...bindActionCreators({fetchWeather}, dispatch)
  }
}

class App extends React.Component {
  componentDidMount(){
    this.props.fetchWeather();
  }
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
