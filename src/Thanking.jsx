import React from 'react'
import tick from "./IMG/Group 9.png"
const Thanking = ({setConfirmed}) => {
  return (
    <div className="thank">
      <img src={tick} className="tick" />
      <h1>Thank You!</h1>
      <p>We've added your card details</p>
      <button className="btn" onClick={() => setConfirmed(false)}>
        Continue
      </button>
    </div>
  );
}

export default Thanking;