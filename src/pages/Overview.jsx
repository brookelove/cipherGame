import "../assets/CSS/Overview.css";
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {LevelPage} from "../pages"

const Overview = () => {
  let progressArr = [];
  let navigate = useNavigate();
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
      setButtonStatus(progress)
      buttonStatus.forEach(item => {
        if (item >= 0 && item <= 7) {
          buttonStatus[item - 1] = true;
        }
      });
    }
  }

  const handleButtonClick = (index) => {
    window.location.href = `/level/${index}`
  }

  useEffect (()=> {
    checkProgress()
  }, [])

  return (
    <section className='overview-section'>
      <h1>Levels</h1>
      <div>
        {buttonStatus.map((isDisabled, index) => (
          <button key={index} disabled={!isDisabled} className={isDisabled ? "" : "disabled"} onClick={() => handleButtonClick(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  )
}

export default Overview