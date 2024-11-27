import React from "react";
import styles from "./ButtonUp.module.css";

const handleScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const ButtonUp = () => {
  return (
    <button className={styles.buttonUp} onClick={handleScrollToTop}>
      ↑
    </button>
  );
};

export default ButtonUp;
