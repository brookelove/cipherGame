import React from 'react'

const CongratsModal = ({closeModal,isPassed,level}) => {
  const nextLevel = () => {
    closeModal()
    window.location.href(`/level/${level+1}`);
  }
  const backToOverview = () => {
    closeModal()
    window.location.href("/overview");
  }
  return (
    <section className='congrats-modal'>
        {isPassed ?  <h1>Congratulations!</h1> : <h1>Try Again Next Time</h1>}
       
        <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        {isPassed ? 
        <div>
          <button onClick={closeModal}>Next Level</button>
          <button onClick={backToOverview}>Back To Overview</button>
        </div> : <button onClick={backToOverview}>See You In 24H</button>}
    </section>
  )
}

export default CongratsModal