"use client";

import React, { useState, useEffect } from "react";
import styles from "./Timer.module.css";

const Timer: React.FC<{
  setShowFirst: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setShowFirst }) => {
  const initialTime = 90;
  const [seconds, setSeconds] = useState(initialTime);

  useEffect(() => {
    if (seconds === 0) {
      setShowFirst((prev) => !prev);
      setSeconds(initialTime);
      return;
    }

    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [seconds, setShowFirst]);

  return (
    <div className={styles.counter}>
      <p>{`${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(
        2,
        "0"
      )}`}</p>
    </div>
  );
};

export default Timer;
