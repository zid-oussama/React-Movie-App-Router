import React from 'react'
import './Filter.css'
import ReactStars from "react-rating-stars-component";


export default function Filter({ handleSearch, handleRating }) {
    return (
        <div className='filter'>
            <div className='search'>
                <form action="">
                    <input onChange={handleSearch} type="text" name="title" id="title" placeholder="Search Your Movie" />
                </form>
            </div>
            <ReactStars
                count={10}
                size={24}
                value={0}
                onChange={handleRating}
                activeColor="#ffd700"
            />
            {/* {theRate !== null ? <h3 style={{ color: 'white' }}  >Looking For Movies With Rate Over : {theRate}</h3> : null} */}
        </div>
    )
}
