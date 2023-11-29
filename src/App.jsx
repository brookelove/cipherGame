import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Overview, Home } from './pages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LevelPage from './pages/LevelPage'
function App() {
  // const [theme, setTheme] = useState('light');

  // const switchTheme = (newTheme) => {
  //   setTheme(newTheme);
  //   localStorage.setItem('theme', newTheme);
  // };

  // useEffect(() => {
  //   const storedTheme = localStorage.getItem('theme');
  //   if (storedTheme) {
  //     setTheme(storedTheme);
  //   } else {
  //     const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  //     setTheme(defaultDark ? 'dark' : 'light');
  //   }
  // }, []);

  const changeTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
  };


  return (
    <main>
      <Router>
        <Navbar changeTheme={changeTheme}/>
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
