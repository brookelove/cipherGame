import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import "../assets/CSS/Navbar.css"
const Navbar = ({changeTheme}) => {
  // const [theme, setTheme] = useState(false);

  // const switchTheme = () => {
  //   const newTheme = theme === 'light' ? 'dark' : 'light';
  //   setTheme(newTheme)
  // }
  // useEffect(() => {
  //   const storedTheme = localStorage.getItem('theme');
  //   if (storedTheme) {
  //     setTheme(storedTheme);
  //   } else {
  //     const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  //     setTheme(defaultDark ? 'dark' : 'light');
  //   }
  // }, []);
  return (
    <header className={`d-between`}>
        <NavLink to="/" className="home box-shadow">CG</NavLink>
        <section>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/">Overview</NavLink>
          <a onClick={() => changeTheme('dark')}>🌙</a>
          <a onClick={() => changeTheme('light')}>☀️</a>
          <a onClick={() => changeTheme('sea')}>🌊</a>
        </section>
    </header>
  )
}

export default Navbar