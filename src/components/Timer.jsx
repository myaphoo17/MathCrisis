import React, { useEffect } from "react";

const Timer = ({ time, setTime, showTimer, onGameOver }) => {
  useEffect(() => {
    if (showTimer && time > 0) {
      const interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (time === 0) {
      onGameOver();
    }
  }, [time, showTimer, setTime, onGameOver]);

  return  <div className="flex justify-center items-center text-md py-5 px-1 ">
  <span className="mr-2 text-xl font-semibold">Time Left:</span>
  <span className="text-xl font-semibold text-red-500">{time}s</span>
</div>;
};

export default Timer;
