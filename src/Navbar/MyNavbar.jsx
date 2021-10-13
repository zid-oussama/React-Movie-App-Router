import { Link } from "react-router-dom"
import './MyNavbar.css'


export default function MyNavbar() {
    return (

        <div className='navbar'>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/Movies'><li>Movies</li></Link>
                <Link to='/AddMovies'><li>Add</li></Link>
                <Link to='/LogIn'><li>Log In</li></Link>
            </ul>
        </div>

    )
}
