import React, { useState }  from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import { Map, TileLayer, ZoomControl } from 'react-leaflet';
import Freedraw, { ALL } from 'react-leaflet-craft';


function App() {

  // const [state, setState] = useState("a");

  // const change = () => {
  //   setState("b");
  //   console.log("new State is ", state);
  // }

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
      />
    </Map>
  </div>
  );
}

export default App;
