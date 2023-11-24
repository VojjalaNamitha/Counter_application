import React, { useEffect, useState } from 'react';
import "./App.css"

function Counter() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const startTimer = () => {
    if (!isTimerRunning) {
      if (intervalId) {
        clearInterval(intervalId);
      }

      const newIntervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);

      setIntervalId(newIntervalId);
      setIsTimerRunning(true);
    }
  };

  const stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      setIsTimerRunning(false);
    }
  };

  return (
    <>
      <div id="conter-card">
        <div style={{ textAlign: 'center', marginTop: '50px', color: 'blue' }}>
          <h1>Counter: {count}</h1>
          <button style={{ fontSize: '20px', padding: '10px', margin: '5px', color: 'green', }}
            onClick={() => startTimer()} disabled={isTimerRunning} > Start</button>
          <button style={{ fontSize: '20px', padding: '10px', margin: '5px', color: 'red', }}
            onClick={() => stopTimer()} disabled={!isTimerRunning} >Stop </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
