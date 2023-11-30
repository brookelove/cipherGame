import React, { useEffect, useState } from 'react'
import "../assets/CSS/Overview.css";

const Overview = () => {
  let progressArr = [];
  const [buttonStatus, setButtonStatus] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const checkProgress = () => {
    let progress = JSON.parse(localStorage.getItem('progress'));

    if (progress === null || !Array.isArray(progress)) {
      const initialButtonStatus = Array(7).fill(false);
      initialButtonStatus[0] = true;
      setButtonStatus(initialButtonStatus);
      localStorage.setItem("progress", JSON.stringify(initialButtonStatus));
    } else {
      console.log(progress)
      console.log(buttonStatus)

      buttonStatus.forEach(item => {
        console.log(item)
        if (item >= 1 && item <= 7) {
          buttonStatus[item - 1] = true;
        }
      });
      localStorage.setItem("progress", JSON.stringify(buttonStatus))
    }
  }

  useEffect (()=> {
    checkProgress()
  }, [])

  return (
    <section className='overview-section'>
      <h1>Levels</h1>
      <div>
        {buttonStatus.map((isDisabled, index) => (
          <button key={index} disabled={isDisabled} className={isDisabled ? "" : "disabled"} onClick={() => handleButtonClick(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  )
}

export default Overview