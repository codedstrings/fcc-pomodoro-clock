import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
  const [isSession, setIsSession] = useState(true);

  const handleBreakDecrement = () => {
    if (isRunning) return; // Prevent decrementing while running
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
      if (!isSession) setTimeLeft((breakLength - 1) * 60);
    }
  };
  const handleBreakIncrement = () => {
    if (isRunning) return;
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
      if (!isSession) setTimeLeft((breakLength + 1) * 60);
    }
  };
  const handleSessionDecrement = () => {
    if (isRunning) return;
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      if (isSession) setTimeLeft((sessionLength - 1) * 60);
    }
  };
  const handleSessionIncrement = () => {
    if (isRunning) return;
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      if (isSession) setTimeLeft((sessionLength + 1) * 60);
    }
  };

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    // Stop and reset the audio
    const audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;
    setIsRunning(false);
    setCount(1);
    setSessionLength(25);
    setBreakLength(5);
    setTimeLeft(25 * 60);
    setIsSession(true);
  };

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      // Set up a timer that runs every 1000ms (1 second)
      const timer = setInterval(() => {
        setTimeLeft(timeLeft - 1); // subtract 1 second
      }, 1000);

      // Clean up the timer when this effect runs again
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      // Play the beep sound when the timer reaches zero
      document.getElementById("beep").play();

      // Switch between session and break
      if (isSession) {
        setTimeLeft(breakLength * 60);
        setIsSession(false);
      } else {
        setTimeLeft(sessionLength * 60);
        setCount(count + 1);
        setIsSession(true);
      }
    }
  }, [breakLength, count, isRunning, isSession, sessionLength, timeLeft]);

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
        <h2 id="timer-label">
          {isSession ? "Session " : "Break "}
          {count}
        </h2>
        <h1 id="time-left">{formatTime(timeLeft)}</h1>
        <div className="timer-controls">
          <button id="start_stop" onClick={handleStartStop}>
            Start/Stop
          </button>
          <button id="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
      <audio
        id="beep"
        src="https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        preload="auto"
      />
    </>
  );
}

export default App;
