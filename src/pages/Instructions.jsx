import React, {useState} from 'react'
import "../assets/CSS/Instructions.css"

const Instructions = () => {
  const[count, setCount] = useState(0)
  const instructionArr = ["This is Cipher Game.","Your goal is to decipher various codes and puzzles to progress through levels.", " Each level presents a unique cipher challenge to solve.","Use clues and your logical skills to solve them.", "Remember, the ? in the bottom section provides helpful hints if you get stuck."]
  return (
    <div className='instruction-container d-center' id="instructions">
      <h1>Instructions</h1>
      {instructionArr.length === count ? 
      <div>
      <button>Start</button>
      <button>Read Again</button>
      </div> : <button>arrow</button>}
    </div>
  )
}

export default Instructions