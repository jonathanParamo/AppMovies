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

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/dashboard/' element={<Dashboard /> } >
          <Route path='/dashboard/popular' element={<Movies gender="popular" />} />
          <Route path='/dashboard/top_rated' element={<Movies gender="top_rated" />} />
          <Route path='/dashboard/upcoming' element={<Movies gender="upcoming" />} />
          <Route path='/dashboard/on_demand' element={<Movies gender="now_playing" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;