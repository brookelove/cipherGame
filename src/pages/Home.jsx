import React, {useRef }from 'react'
import "../assets/CSS/Home.css"
import { Link as ScrollLink } from 'react-scroll';
import threeDBalls from "../assets/Videos/shapes.mp4";

const Home = () => {
  const targetRef = useRef(null);
  return (
    <section className='home-container'>
      <video autoPlay muted loop id="video-background" className='video-exclude'>
        <source src={threeDBalls} type="video/mp4"></source>
      </video>
      <div className='video-overlay'>
        <h1>CIPHER GAME</h1>
        <ScrollLink to="instructions" smooth={true} duration={500}>
          ⬇
        </ScrollLink>
      </div>
    </section>
  )
}

export default Home