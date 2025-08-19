import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>25 + 5 Clock</h1>
      <div className="break-length-wrapper">
        <div className="break-length">
          <h2 id="break-label">Break Length</h2>
          <div className="break-controls">
            <button id="break-decrement">-</button>
            <span id="break-length">5</span>
            <button id="break-increment">+</button>
          </div>
        </div>
      </div>
      <div className="session-length-wrapper">
        <div className="session-length">
          <h2 id="session-label">Session Length</h2>
          <div className="session-controls">
            <button id="session-decrement">-</button>
            <span id="session-length">25</span>
            <button id="session-increment">+</button>
          </div>
        </div>
      </div>
      <div>Session {count}</div>
      <div className="timer-wrapper">
        <h2 id="timer-label">Session</h2>
        <h1 id="time-left">25:00</h1>
        <div className="timer-controls">
          <button id="start_stop">Start/Stop</button>
          <button id="reset">Reset</button>
        </div>
      </div>
    </>
  )
}

export default App
