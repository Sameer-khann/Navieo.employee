import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Alltasks from './pages/Alltasks';
import ScrollToTop from './components/ScrollToTop';
import Attendance from './pages/Attendance';
import AdminLandingPage from './pages/AdminLandingPage';
import AdminAlltasks from './pages/AdminAlltasks';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/Admin" element={<AdminLandingPage/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/AllTasks" element={<Alltasks />} />
          <Route path="/AdminAllTasks" element={<AdminAlltasks/>} />
          <Route path="/Attendance" element={<Attendance/>}/>
        </Routes>
      </Router>
    </>




    // <div className="App">
    //   <Login/>
    // </div>
  );
}

export default App;
