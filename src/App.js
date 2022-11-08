import {
  BrowserRouter
  as
  Router,
  Route,
  Routes
  } from 'react-router-dom';
import './App.css';
import MainMenu from './Pages/MainMenu';
import TopRated from './Pages/TopRated';
import Dasboard from './components/DashBoard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/dashboard/' element={<Dasboard /> } >
          <Route path='/dashboard/top_rated' element={<TopRated />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;