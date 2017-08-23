import React, { Component } from 'react';
import '../style/App.css';
import EarthquakeList from './earthquakeList.js'
import EarthquakeInfo from './earthquakeInfo.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <div className="my-header">Earthquakes!</div>
        </div>
        <EarthquakeList />
        <EarthquakeInfo />
      </div>
    );
  }
}

export default App;
