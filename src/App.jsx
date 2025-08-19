import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
  const [isSession, setIsSession] = useState(true);

  const handleBreakDecrement = () => {
    if (breakLength > 1 && !isRunning) {
      setBreakLength(breakLength - 1);
    }
  };
  const handleBreakIncrement = () => {
    if (breakLength < 60 && !isRunning) {
      setBreakLength(breakLength + 1);
    }
  };
  const handleSessionDecrement = () => {
    if (sessionLength > 1 && !isRunning) {
      setSessionLength(sessionLength - 1);
      setTimeLeft((sessionLength - 1) * 60);
    }
  };
  const handleSessionIncrement = () => {
    if (sessionLength < 60 && !isRunning) {
      setSessionLength(sessionLength + 1);
      setTimeLeft((sessionLength + 1) * 60);
    }
  };

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCount(0);
    setSessionLength(25);
    setBreakLength(5);
    setTimeLeft(25 * 60);
    setIsSession(true);
  }

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      // Set up a timer that runs every 1000ms (1 second)
      const timer = setInterval(() => {
        setTimeLeft(timeLeft - 1); // subtract 1 second
      }, 1000);

      // Clean up the timer when this effect runs again
      return () => clearInterval(timer);
    }
  }, [isRunning, timeLeft]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <h1>25 + 5 Clock</h1>
      <div className="break-length-wrapper">
        <div className="break-length">
          <h2 id="break-label">Break Length</h2>
          <div className="break-controls">
            <button id="break-decrement" onClick={handleBreakDecrement}>
              -
            </button>
            <span id="break-length">{breakLength}</span>
            <button id="break-increment" onClick={handleBreakIncrement}>
              +
            </button>
          </div>
        </div>
      </div>
      <div className="session-length-wrapper">
        <div className="session-length">
          <h2 id="session-label">Session Length</h2>
          <div className="session-controls">
            <button id="session-decrement" onClick={handleSessionDecrement}>
              -
            </button>
            <span id="session-length">{sessionLength}</span>
            <button id="session-increment" onClick={handleSessionIncrement}>
              +
            </button>
          </div>
        </div>
      </div>
      <div className="timer-wrapper">
        <h2 id="timer-label">Session {count}</h2>
        <h1 id="time-left">{formatTime(timeLeft)}</h1>
        <div className="timer-controls">
          <button id="start_stop" onClick={handleStartStop}>Start/Stop</button>
          <button id="reset" onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
