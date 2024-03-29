import React from 'react'
import './LineSteps.css'

const LineSteps = () => {
  return (
    <div>
      <ul className="timeline">
        <li className="start">
          <div className="bullet"></div>
          <div className="line"></div>
          <h3>Design yours</h3>
          <p>
            Start by making Backyard yours. Choose your layout, colors, windows,
            doors, decks, interior, roof, and solar.
          </p>
          <p>
            After you request a proposal, we kick off our remote property
            analysis.
          </p>
        </li>
        <li className="left">
          <div className="bullet"></div>
          <div className="line"></div>
          <div className="time">
            two weeks later
          </div>
          <h3>Design yours</h3>
          <p>
            Start by making Backyard yours. Choose your layout, colors, windows,
            doors, decks, interior, roof, and solar.
          </p>
          <p>
            After you request a proposal, we kick off our remote property
            analysis.
          </p>
        </li>
        <li className="right">
          <div className="bullet"></div>
          <div className="line"></div>
          <div className="time">
            one week later
          </div>
          <h3>Design yours</h3>
          <p>
            Start by making Backyard yours. Choose your layout, colors, windows,
            doors, decks, interior, roof, and solar.
          </p>
          <p>
            After you request a proposal, we kick off our remote property
            analysis.
          </p>
        </li>
        <li className="right">
          <div className="bullet"></div>
        </li>
        <li className="center">
          <div className="line"></div>
          <div className="time">
            one week later
          </div>
          <h3>Design yours</h3>
          <p>
            Start by making Backyard yours. Choose your layout, colors, windows,
            doors, decks, interior, roof, and solar.
          </p>
          <p>
            After you request a proposal, we kick off our remote property
            analysis.
          </p>
        </li>
      </ul>
    </div>
  )
}

export default LineSteps