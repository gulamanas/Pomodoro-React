/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { FaStop, FaPlay, FaUndo } from 'react-icons/fa';

const Timer = ({ initialTime }) => {
  //   const initialTime = 25 * 60;
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    let interval;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      alert('Timer completed!');
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setTime(initialTime);
    setIsActive(false);
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='time text-[200px] font-semibold border border-green-500'>
        {formatTime(time)}
      </div>
      <div className='flex gap-5'>
        <button onClick={handleStart}>
          <FaPlay />
        </button>
        <button onClick={handleStop}>
          <FaStop />
        </button>
        <button onClick={handleReset}>
          <FaUndo />
        </button>
      </div>
    </div>
  );
};

export default Timer;
