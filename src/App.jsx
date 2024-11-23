import './App.css'
import Footer from './components/Footer'
import HallsPage from './components/Hall/HallsPage'
import Home from './components/Home'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom';
import Notfound from './components/Notfound'

function App() {

  return (
    <div className='bg-[#e3d3d3] flex flex-col justify-between gap-4 min-h-screen '>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Notfound />} />
        <Route path='/halls' element={<HallsPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
