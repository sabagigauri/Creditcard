import React, { useEffect, useState } from 'react'
import certilebi from "./IMG/certilebi.png";
import xazebi from "./IMG/Group 15.png";
import { format } from "date-fns";
import Thanking from './Thanking';
const App = () => {
  const [confirmed, setConfirmed] = useState(false)
  const [name, setName] = useState("")
  const [CardNumber, setCardNumber] = useState('')
  const [date, setDate] = useState("01/23")
  const [cvc, setCvc] = useState("")



  return (
    <>
      <section>
        <div className="picture">
          <div className="wrapper">
            <div className="firstcard">
              <img className="bubble" src={certilebi} />
              <input
                className="card-numb"
                type="text"
                placeholder="0000 0000 0000 0000"
                value={CardNumber}
              />
              <div className="name-expire">
                <input type="text" value={name} placeholder="JANE APPLESEED" />
                <input
                  type="text"
                  value={format(new Date(date), "MM/yy")}
                  placeholder="00/00"
                />
              </div>
            </div>
            <div className="backcard">
              <div className="black-div"></div>
              <div className="cvc-div">
                <input
                  className="cvc"
                  type="text"
                  value={cvc}
                  placeholder="000"
                />
              </div>
              <img src={xazebi} />
            </div>
          </div>

          {!confirmed && (
            <div className="inputs">
              <div className="first-input-row">
                <p className="inputInfo">CARDHOLDER NAME</p>
                <input
                  value={name}
                  maxLength={30}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="e.g Jane Appleseed"
                />
              </div>

              <div className="second-input-row">
                <p className="inputInfo">CARD NUMBER</p>
                <input
                  type="text"
                  value={CardNumber.replace(/\s/g, "")
                    .replace(/(\d{4})/g, "$1 ")
                    .trim()}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="123 456 789 0000"
                  maxLength={19}
                />
              </div>

              <div className="third-input-row">
                <div className="left-side">
                  <p className="inputInfo">EXP. DATE (MM/YY)</p>

                  <input
                    id="date"
                    type="month"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="MM/YY"
                  />
                  {/* <input type="text" placeholder="YY" /> */}
                </div>

                <div className="right-side">
                  <p className="inputInfo">CVC</p>
                  <input
                    type="text"
                    value={cvc}
                    maxLength={3}
                    onChange={(e) => setCvc(e.target.value)}
                    placeholder="e.g 123"
                  />
                </div>
              </div>

              <button className="confirm" onClick={() => setConfirmed(true)}>
                Confirm
              </button>

            </div>
          )}
          {confirmed && <Thanking setConfirmed={setConfirmed} />}
        </div>
      </section>
    </>
  );
}

export default App