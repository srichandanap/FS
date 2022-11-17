import React, { useState, useEffect } from 'react'
import NavBar from '../../components/navBar/navBar'
import Map from '../../components/map/map'
import { getPlacesData } from '../../utils/api';
import PlaceDetailsfrom from '../../components/placeDetails/placeDetails';

const MapPage = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });

    })

  }, [])

  useEffect(() => {
    getPlacesData()
      .then((data: any) => {
        console.log(data.data);
        setPlaces(data.data);
      })

  }, [coordinates]);


  return (
    <>
      <NavBar />

      <Map />

    </>
  )
}

export default MapPage