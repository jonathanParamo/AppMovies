import {
  BrowserRouter
  as
  Router,
  Route,
  Routes,
  } from 'react-router-dom';
import './App.css';
import Movies from './Pages/Movies';
import Dashboard from './components/Dashboard'
import MoreInfoMovie from './Pages/MovieInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard /> } />
        <Route path='/dashboard/*' element={<Dashboard /> } >
          <Route path='category/:name' element={<Movies />} />
          <Route path='movie/:id' element={<MoreInfoMovie />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;