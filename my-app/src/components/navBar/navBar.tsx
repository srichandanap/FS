import React from 'react'
import "./navBar.css"
import fsq from '../../assets/icons/fsq.png';
import search from '../../assets/icons/search.png';


const NavBar = () => {
     
    return (
        <>
            <div className="nav">
                <div className="title">
                    <img src={fsq} alt="image" />
                </div>
                <div className='search'>
                    <input type="text" placeholder='Search' className='searchField' />
                    <img src={search} alt="image" />
                </div>
            </div>
          
        </>
    )
}

export default NavBar