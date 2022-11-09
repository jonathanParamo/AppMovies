import {
  BrowserRouter
  as
  Router,
  Route,
  Routes
  } from 'react-router-dom';
import './App.css';
import TopRated from './Pages/TopRated';
import Upcoming from './Pages/Upcoming';
import Dasboard from './components/DashBoard';
import Popular from './Pages/Popular';
import OnDemand from './Pages/OnDemand';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/dashboard/' element={<Dasboard /> } >
          <Route path='/dashboard/popular' element={<Popular />} />
          <Route path='/dashboard/top_rated' element={<TopRated />} />
          <Route path='/dashboard/upcoming' element={<Upcoming />} />
          <Route path='/dashboard/on_demand' element={<OnDemand />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;