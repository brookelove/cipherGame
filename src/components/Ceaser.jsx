import "../assets/CSS/Ceaser.css"
import {CongratsModal} from "../components/index"
import React, { useState } from 'react'
import { useParams } from "react-router-dom"
// import { useNavigate } from 'react-router-dom'

const Ceaser = () => {
  const level = useParams().level;
  const [count, setCount] = useState(3)
  const [answer, setAnswer] = useState("");
  // const [hits, setHints] = useState(false);
  const [warning, setWarning] = useState(false);
  const [isPassed, setIsPassed] = useState(false); 
  const [openModal, setOpenModal] = useState(false);
  const checkAnswer = (e) => {
    e.preventDefault();
    if (answer.toLowerCase() === "welcome to the game") {
      setIsPassed(true);
      setOpenModal(true)
      let progress = JSON.parse(localStorage.getItem('progress'));
      progress[1] = true;
      localStorage.setItem("progress", JSON.stringify(progress))
      return
    }
    if (count == 1) {
      setWarning(true)
    } 
    if (count <= 3) {
      setCount(count-1);
    } 
    if(count === 0) {
      setIsPassed(false);
      setOpenModal(true)
      setCount(0)
    }
    setAnswer("")
  }

  const handleInputChange = (e) => {
    setAnswer(e.target.value);
  }

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div className='ceaser-cipher fullpage d-center'>
      <div className='background'>
        <p>🥗</p>
        <p>🥗</p>
        <p>🥗</p>
        <p>🥗</p>
        <p>🥗</p>
        <p>🥗</p>
        <p>🥗</p>
        <p>🥗</p>
        <p>🥗</p> 
        <p>🥗</p>
        <p>🥗</p>
        <p>🥗</p>
        <p>🥗</p> 
        <p>🥗</p>
      </div>
      <div className='card d-center'>
      <header className='d-between'>
        <p className={warning ? 'warn' : null}>ATTEMPTS LEFT : {count}</p>
        <a className="hint">?</a>
        <div className="hint-container">
          <p><u>HINT 1</u> What is a type of salad and a cipher?</p>
          <p><u>HINT 2</u> Look at the salads when you hover.</p>
        </div>
      </header>
      <form className='d-center'>
      <h2>Tbi zlj qb Dlbj</h2>
      <input type='text' value={answer} onChange={handleInputChange}/>
      <button onClick={checkAnswer}
      >Send</button>
      </form>
      </div>
      {openModal && (
        <div className="modal">
          <CongratsModal closeModal={closeModal} isPassed={isPassed} level={level}/>
        </div>
      )}
    </div>
  )
}

export default Ceaser