import React, { useState } from 'react'
import './MovieList.css'
import MovieCard from '../MovieCard/MovieCard'
import { MyMovies } from '../Data/MyMovies'
import Filter from "../Filter/Filter"



export default function MovieList() {
    const [mvname, setmvname] = useState('')
    const [mvrate, setmvrate] = useState('')
    function handleSearch(e) {
        setmvname(e.target.value)
    }
    function handleRating(newRating) {
        console.log(newRating)
        setmvrate(newRating)
    }

    return (
        <>
            <Filter handleSearch={handleSearch} handleRating={handleRating} />
            <div className="movielist">
                {MyMovies.filter((mv => mv.Title.toLowerCase().includes(mvname.toLowerCase().trim()) && mv.imdbRating >= mvrate)).map((mv, key) => {
                    return (
                        <MovieCard key={key} title={mv.Title} plot={mv.Plot} poster={mv.Poster} rate={mv.imdbRating} src={mv.src} />
                    )
                })}
            </div>
        </>
    )
}
