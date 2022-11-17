import React from 'react'
import GoogleMapReact from 'google-map-react';

const Map = () => {

  const coordinates = { lat: 0, lng: 0 };

  return (
    <div className='mapsDisplay'>

      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact

          defaultCenter={coordinates}
          center={coordinates}
          onChange={(e) => console.log(e)}

          defaultZoom={16}
        >

          {/* <div lat={15.139} lng={76.92} > */}
          <div>
            <div className="pin"></div>
          </div>




        </GoogleMapReact>
      </div >

    </div>
  )
}

export default Map