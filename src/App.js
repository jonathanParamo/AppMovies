import {
  BrowserRouter
  as
  Router,
  Route,
  Routes
  } from 'react-router-dom';
import './App.css';
import TopRated from './Pages/TopRated';

function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<TopRated />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;