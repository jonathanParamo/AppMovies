import {
  BrowserRouter
  as
  Router,
  Route,
  Routes
  } from 'react-router-dom';
import './App.css';
import Movies from './Pages/Movies';
import Dashboard from './components/Dashboard'
import SearchMovie from "./Pages/SearchMovie"
import MoreInfoMovie from './Pages/MovieInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/dashboard/*' element={<Dashboard /> } >
          <Route path='*' element={<Movies gender="popular" />} />
          <Route path='popular' element={<Movies gender="popular" />} />
          <Route path='top_rated' element={<Movies gender="top_rated" />} />
          <Route path='upcoming' element={<Movies gender="upcoming" />} />
          <Route path='on_demand' element={<Movies gender="now_playing" />} />
          <Route path='movie/:id' element={<MoreInfoMovie />} />
        </Route>
          <Route path='/search' element={<SearchMovie/>} />
      </Routes>
    </Router>
  );
}

export default App;