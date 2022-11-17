import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';

const URL = 'https://developers.zomato.com/api/v2.1/geocode'

const options = {
  params:{
    lat: '20.59',
    lng: '78.96',
  },
  headers: {
    Accept: "application/json",
    "user-key": "c470e80941290e8b35355d10dcfb3e36",
  }

};

export const getPlacesData = async () => {

  try {

    const response = await axios.get(URL, options);
    // console.log(response);
    return response;

  } catch (error) {

    console.log(error);
  }
}