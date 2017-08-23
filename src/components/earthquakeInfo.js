import React, { Component } from 'react';
import earthquakes from '../data/earthquakes.js'
import moment from 'moment';

class EarthquakeInfo extends Component {
  render() {
    console.log(earthquakes.features);
    const quakes = earthquakes.features.map((earthquakes, i) => {
    return (
      <div className="col-sm-6" key={i}>
        <div className="card" >
        <div className="card-block">
        <h4 className="card-title">{earthquakes.place}</h4>
        <h6 className="card-subtitle mb-2 text-muted">Magnitude: {earthquakes.mag}</h6>
        <h6 className="card-subtitle mb-2 text-muted">Time: {moment(earthquakes.time).format('llll')}</h6>
        <p className="card-text">Coordinates: {earthquakes.geometry.coordinates.join(', ')}</p>

        <a href={earthquakes.url} className="card-link">USGS Event Link</a>
        </div>
        </div>
      </div>
  )})
  return (
      <div className="quake-list">
        <div className="row">
          {quakes}
        </div>

      </div>
    )
  }
}


export default EarthquakeInfo;
