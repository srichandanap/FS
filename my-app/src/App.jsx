import React from 'react';
import './App.css';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

function App() {
  const location = {
    lat:13.340881,
    lng:74.742142
  }
  const { isLoaded } = useLoadScript({
    googleApiKey: process.env.googleAPi_Key
  })
  if(!isLoaded){
    return <h1>Loading....</h1>
  }
  return (
    <div>
      <GoogleMap
        center={location}
        zoom={15}
        mapContainerStyle={{width:"100%",height:"100%"}}
      >
        <Marker position={location}/>
      </GoogleMap>
    </div>
  );
}

export default App;
