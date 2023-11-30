import React, { useEffect } from 'react'
import {Ceaser, Atbash} from '../components/index'
import { useParams } from 'react-router-dom'
const LevelPage = () => {
  let level = useParams().levelId;

  const whatLevel = () => {
    switch (parseInt(level)) {
      case 1:
        return <Ceaser/>
      case 2:
        return <Atbash/>
      case 3:
        
        break;
      case 4:
        
        break;
      case 5:
        
        break;
      case 6:
        
        break;
      case 7:
        
        break;
    
      default:
        null;
    }
  }

  return (
    <section className='level-page-container'>
      <>{whatLevel()}</>
    </section>
  )
}

export default LevelPage