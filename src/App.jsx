import './App.css'
import Footer from './components/Footer'
import HallsPage from './components/Halls/HallsPage'
import Home from './components/Home'
import NavBar from './components/NavBar'
import PlanningTools from './components/PlanningTools'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Notfound from './components/Notfound'
import LoginPage from './components/Login/LoginPage'
import SignupPage from './components/Login/SignupPage'
import WeddingServices from './components/Organise/WeddingServices'
import Photographer from './components/Photography/Photographer'
import HallDetails from './components/Halls/HallDetails';
import PhotographerDetails from './components/Photography/PhotoGrapherDetails'

function App() {
  return (
    <div className='bg-[#ffffff] flex flex-col min-h-screen justify-between h-screen w-full'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route 
          path="/planning-tools" element={<PlanningTools />} />
        <Route path="/organize" element={<WeddingServices />} />
        <Route path="/halls" element={<HallsPage />} />
        <Route path="/halls/:id" element={<HallDetails />} />
        <Route path="/photographers" element={<Photographer />} />
        <Route path="/photographers/:id" element={<PhotographerDetails />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;

