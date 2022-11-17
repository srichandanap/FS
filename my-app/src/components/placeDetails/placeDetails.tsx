import React from 'react'
import './placeDetails.css';

const PlaceDetails = () => {
    return (
        <>
            <div className="card">
                <div className="left">

                    <div className="fsq">

                        <img src={require("../../assets/icons/fsq.png")} alt="image" />

                    </div>
                    <div className="restDetails">
                        <div className='restName'>Plane Cafe</div>
                        <div className='cuisines'>sandwiches</div>
                        <div className='address'>manipal, karnataka</div>
                    </div>
                </div>

                <div className='rate'>
                    <div className='rating'>4</div>
                </div>
            </div>
        </>
    )
}

export default PlaceDetails
