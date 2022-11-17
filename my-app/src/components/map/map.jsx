import React from 'react'
import GoogleMapReact from 'google-map-react';

const Map = () => {
  return (
    <div className='mapsDisplay'>

      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact

          center={{
            lat: 13.34,
            lng: 74.74
          }}
          defaultZoom={16}
        >

          <div lat={13.34} lng={74.74} >
            <div className="pin"></div>
          </div>


        </GoogleMapReact>
      </div >

    </div>
  )
}

export default Map