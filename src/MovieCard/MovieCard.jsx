import React from 'react'
import './MovieCard.css'
import { Link } from 'react-router-dom'

export default function MovieCard({ title, plot, poster, rate, src }) {
    return (
        <div className="MovieCard">
            <Link to={`/Movies/${title}`}>
                <div className="MovieList">
                    <div className="Card">
                        <div className='onlycard'>
                            <img src={poster} alt={title} />
                            <div className="info">
                                <h3>{title}</h3>
                                <p>ImdbRating: <span>{rate}</span> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
