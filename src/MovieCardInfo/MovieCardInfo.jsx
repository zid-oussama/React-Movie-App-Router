import React from 'react'
import './MovieCardInfo.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { MyMovies } from '../Data/MyMovies'


export default function MovieCardInfo() {
    const { title } = useParams()
    const [mymovieinfo] = MyMovies.filter(mv => mv.Title === title)
    console.log(mymovieinfo)
    return (
        <div className='cardInfo' style={{ position: "fixed", top: 0, bottom: 0, left: 0, backgroundColor: "black", zIndex: '200' }}>
            <div className="info">
                <div className="pt1">
                    <img src={mymovieinfo.Poster} alt={mymovieinfo.Title} />
                    <h3>{mymovieinfo.Title}</h3>
                    <p>ImdbRating: <span>{mymovieinfo.imdbRating}</span> </p>
                    <p>{mymovieinfo.Plot}</p>
                </div>
                <div className="pt2">
                    <iframe src={mymovieinfo.src} title={mymovieinfo.Title} frameBorder="0" allowFullScreen></iframe>
                </div>


            </div>

            <Link to='/Movies'>
                <button >BACK</button>
            </Link>

        </div>
    )
}
