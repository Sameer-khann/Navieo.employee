
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Alltasks from './pages/Alltasks';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/AllTasks" element={<Alltasks />} />
        </Routes>
      </Router>
    </>




    // <div className="App">
    //   <Login/>
    // </div>
  );
}

export default App;
