import React from 'react'
import "./navBar.css"
import PlaceDetails from '../placeDetails/placeDetails'

const NavBar = () => {

    // const handleSearch = (e: any) => {
    //    const searchInput = e.target.value;
    // }

    return (
        <>
            <div className="nav">
                <div className="title">
                    <img src={require("../../assets/icons/fsq.png")} alt="image" />
                </div>
                <div className='search'>
                    <input type="text" placeholder='Search' className='searchField' />
                    <img src={require("../../assets/icons/search.png")} alt="image" />
                  
                </div>
            </div>
            <PlaceDetails />
        </>
    )
}

export default NavBar