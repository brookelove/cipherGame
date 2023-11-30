import { NavLink } from 'react-router-dom'
import "../assets/CSS/Navbar.css"
const Navbar = ({changeTheme}) => {

  return (
    <header className={`d-between header`}>
        <NavLink to="/" className="home box-shadow">CG</NavLink>
        <section className='d-between'>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/">Overview</NavLink>
        </section>
    </header>
  )
}

export default Navbar