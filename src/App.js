import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MyNavbar from './Navbar/MyNavbar';
import MyHome from './MyHome/MyHome';
import MovieCardInfo from './MovieCardInfo/MovieCardInfo';
import MovieList from './MovieList/MovieList';
import MovieAdd from './MovieAdd/MovieAdd'

function App() {
  return (
    <Router>
      <div className="App">
        <MyNavbar />
        <Route exact path='/'>
          <MyHome />
        </Route>
        <Route exact path='/Movies'>
          <MovieList />
        </Route>
        <Route exact path='/Movies/:title'>
          <MovieCardInfo />
        </Route>
        <Route exact path='/AddMovies'>
          <MovieAdd />
        </Route>
      </div>
    </Router>
  );
}

export default App;
