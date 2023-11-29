import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <NavLink to="/">CG</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/">Overview</NavLink>
    </header>
  )
}

export default Navbar