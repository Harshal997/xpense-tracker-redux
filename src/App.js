import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/landing-page/LandingPage';
import Transactions from './components/transactions/Transactions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/tracker' element={<Transactions />} />
      </Routes>
    </Router>
  );
}

export default App;
