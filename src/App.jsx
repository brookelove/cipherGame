import { useState } from 'react'
// import './App.css'
import Navbar from './components/Navbar'
import { Overview, Home } from './pages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LevelPage from './pages/LevelPage'
function App() {

  return (
    <main>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/overview" element={<Overview/>}/>
          <Route path="/level/:levelId" element={<LevelPage/>}/>
        </Routes>
      </Router>
    </main>
  )
}

export default App
