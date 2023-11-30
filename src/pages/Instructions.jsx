import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "../assets/CSS/Instructions.css"

const Instructions = () => {
  const[count, setCount] = useState(-1)
  const[words, setWords] = useState(0)
  const instructionArr = ["This is Cipher Game.","Your goal is to decipher various codes and puzzles to progress through levels.", " Each level presents a unique cipher challenge to solve.","Be careful because you only get 3 tries a day to solve it.","Use clues and your logical skills to solve them.", "Remember, the ? in the bottom section provides helpful hints if you get stuck."]
  const showInstructions = () => {
       if (count < instructionArr.length) {
      setWords(instructionArr[count]);
      setCount(count + 1);
    }
  }
  const restartInstruction = () => {
    setCount(0);
    setWords(instructionArr[count]);
}
  return (
    <div className='instruction-container d-center' id="instructions">
      <h1 style={{ opacity: words ? '1' : '0' }}>{words}</h1>
      {instructionArr.length === count ? 
        <div className='d-between'>
          <button ><Link to="overview">Start Game</Link></button>
          <button onClick={restartInstruction}>Read Again</button>
        </div> : 
        <button onClick={showInstructions}>{count === 0 ? 'Click Me' : 'Continue'}</button>}
    </div>
  )
}

export default Instructions