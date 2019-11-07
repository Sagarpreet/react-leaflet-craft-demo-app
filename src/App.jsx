import React from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import { Map, TileLayer } from 'react-leaflet';
import Freedraw from 'react-leaflet-craft';
import { Component } from 'react';
import { render } from 'react-dom';

export default class App extends Component {
  
  componentDidMount() {
    document.addEventListener('keydown', event => {
      // Cancel the current FreeDraw action when the escape key is pressed.
      if (event.key === 'Escape') {
        this.freedrawRef.current.leafletElement.cancel();
      }
    });
  }


  // Listen for any markers added, removed or edited, and then output the lat lng boundaries.
  handleOnMarkers = event => {
    console.log(
      'LatLngs:',
      event.latLngs,
      'Polygons:',
      this.freedrawRef.current.leafletElement.size()
    );
  };

  onCreateEnd = (data) => {
    // const undo_event = new CustomEvent('undo', { key: 'z', metaKey: true, shiftKey: false });
    // const redo_event = new CustomEvent('redo', { key: 'z', metaKey: true, shiftKey: true });
    // document.dispatchEvent(undo_event);
     console.log('onCreateEnd');
     document.querySelector("div[title='Undo']").click();
     document.querySelector("div[title='Redo']").click();
  }

  // Listen for when the mode changes
  handleModeChange = event => {
    console.log('mode changed', event);
  };

  freedrawRef = React.createRef();

  render() {

    return (
      <div className="mapContainer"> 
        <Map
          className="map"
          center={[20.5937, 78.9629]}
          zoom={5}
          doubleClickZoom={false}
        >
          <TileLayer
            url="https://api.tiles.mapbox.com/v4/mapbox.emerald/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2FnYXJwcmVldDk3IiwiYSI6ImNqaXhlZjgwaDJtb3EzcW1zdDdwMzJkODcifQ.MA2YIv6VpGLLAo-QYUudTA"
          />
          <Freedraw
            onMarkers={this.handleOnMarkers}
            onModeChange={this.handleModeChange}
            ref={this.freedrawRef}
            onCreateEnd={this.onCreateEnd}
          />
        </Map>
      </div>
    );
  }
}
