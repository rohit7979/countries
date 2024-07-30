
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Favorites from './pages/Favorites'
import Home from './pages/Home'

function App() {


  return (
    <>
       <div>
      <nav>
        <a href="/">Home</a>
        <a href="/favorites">Favorites</a>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
    </>
  )
}

export default App
