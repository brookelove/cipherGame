import React, { useState } from 'react'
import "../assets/CSS/Ceaser.css"


const Ceaser = () => {
  const [count, setCount] = useState(3)
  const [answer, setAnswer] = useState(null)
  const showHints = () => {
    // hint 1 : what is a type of salad and a cipher
    // hint 2 look at the salads when you hover me
  }
  const checkAnswer = (e) => {
    e.preventDefault();
    console.log(answer);
    if(count >= 0) {
      setCount(count-1);
    } else {
      console.log("send back to overview ");
    }
  }
  const handleInputChange = (e) => {
    setAnswer(e.target.value);
  }
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
        <p>ATTEMPTS LEFT : {count}</p>
        <a>?</a>
      </header>
      <form className='d-center'>
      <h2>Tbi zlj qb Dlbj</h2>
      <input type='text' value={answer} onChange={handleInputChange}/>
      <button onClick={checkAnswer}
      >Send</button>
      </form>
      </div>
    </div>
  )
}

export default Ceaser