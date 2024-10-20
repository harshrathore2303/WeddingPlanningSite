import './App.css'
import Footer from './components/Footer'
import HallsPage from './components/Hall/HallsPage'
import Home from './components/Home'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className='bg-[#A98882] flex flex-col justify-between gap-4 min-h-screen '>
      <NavBar />
      <HallsPage />
      {/* <Home /> */}
      <Footer />
    </div>
  )
}

export default App
