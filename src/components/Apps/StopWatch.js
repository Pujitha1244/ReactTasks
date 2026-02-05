
import React, { useEffect, useState } from "react";

export default function Stopwatch() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null); // store interval in state

  const handleStart = () => {
    if (isRunning) return;

    setIsRunning(true);

    const id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    setIntervalId(id); // store interval ID in state
    console.log('id', id);
    console.log('intervalId', intervalId);
  };

  const handlePause = () => {
    clearInterval(intervalId);
    setIsRunning(false);
    setIntervalId(null);
  };

  const handleRestart = () => {
    clearInterval(intervalId);
    setIsRunning(false);
    setCount(0);
    setIntervalId(null);
  };

  // cleanup on unmount
//   useEffect(() => {
//     return () => intervalId && clearInterval(intervalId);
//   }, [intervalId]);

  return (
    <div>
      <h2>Stopwatch</h2>
      <div>{count}</div>

      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={handlePause} disabled={!isRunning}>
        Pause
      </button>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
}
