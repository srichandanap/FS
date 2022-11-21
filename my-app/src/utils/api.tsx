import React, { useEffect, useState } from 'react';
import axios from 'axios';

const URL = 'https://developers.zomato.com/api/v2.1/geocode'

export const getPlacesData = async (localCoordinates: any) => {

  try {

    const response = await axios.get(URL + `?lat=${localCoordinates.lat
      }&lon=${localCoordinates.lng}`, {
      params: {
        lat: localCoordinates.lat,
        lng: localCoordinates.lng
      },
      headers: {
        Accept: "application/json",
        "user-key": "c470e80941290e8b35355d10dcfb3e36",
      }

    });
    // console.log(response);
    return response;

  } catch (error) {

    console.log(error);
  }
}