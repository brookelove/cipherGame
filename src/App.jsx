import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
// import Home from './pages/Home';
// import Overview from './pages/Overview';
// import LevelPage from './pages/LevelPage';
// import Simple from './pages/Simple';
// import Instructions from './pages/Instructions';
import { Overview, Home , Instructions, LevelPage, Simple} from "./pages";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const changeTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
  };
  return (
    <main>
      <Router>
        <Navbar changeTheme={changeTheme}/>
        <Routes>
          <Route path="/" element={<Simple/>}/>
          <Route path="/overview" element={<Overview/>}/>
          <Route path="/level/:levelId" element={<LevelPage/>}/>
          <Route
            path="/instructions"
            element={<Instructions/>}
          />
        </Routes>
      </Router>
    </main>
  )
}

export default App
