import './App.css'
import Footer from './components/Footer'
import HallsPage from './components/Hall/HallsPage'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Tools from './components/Tools/Tools'
import PlanningTools from './components/PlanningTools'
import { Route, Routes } from 'react-router-dom';
import Notfound from './components/Notfound'

function App() {

  return (
    <div className='bg-[#e3d3d3] flex flex-col justify-between gap-4 min-h-screen '>
      <NavBar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/organize' element={<Notfound />} />
        <Route path='/planning-tools' element={<PlanningTools />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
