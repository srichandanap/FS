import React, { useState } from 'react'
import './placeDetails.css';
import { useSelector } from 'react-redux';

const PlaceDetails = () => {

    const [display, setDisplay] = useState<any>(false);
    // const [searchedElement, setSearchedElement] = useState()

    const places = useSelector((state: any) => state.local.places)

    return (
        <>
            {places && places.nearby_restaurants && places.nearby_restaurants.map((place: any, i: any) => {

                return (
                    <div className='scroll'>
                        <div className="card" >
                            <div className="left">

                                <div className="fsq">

                                    <img src={place && place.restaurant && place.restaurant.thumb} alt="image" />

                                </div>
                                <div className="restDetails">
                                    <div className='restName'>{place && place.restaurant && place.restaurant.name && place.restaurant.name}</div>
                                    <div className='cuisines'>{place && place.restaurant && place.restaurant.cuisines && place.restaurant.cuisines}</div>
                                    <div className='address'>{place && place.restaurant && place.restaurant.location && place.restaurant.location.locality_verbose && place.restaurant.location.locality_verbose}</div>
                                </div>
                            </div>

                            <div className='rate'>
                                <div className='rating'>{place && place.restaurant && place.restaurant.user_rating && place.restaurant.user_rating.aggregate_rating && place.restaurant.user_rating.aggregate_rating}</div>
                            </div>
                        </div>
                    </div>
                )
            })
            }

        </ >
    )
}

export default PlaceDetails
