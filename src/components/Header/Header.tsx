import HeaderNext from "./HeaderNext/HeaderNext";
import HeaderRakuten from "./HeaderRakuten/HeaderRakuten";
import styles from "./Header.module.css";
import React, { useEffect, useState } from "react";

interface HeaderProps {
  showFirst: boolean;
}

const Header: React.FC<HeaderProps> = ({ showFirst }) => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
  }, [showFirst]);

  return (
    <header className={styles.headerTransition}>
      <div
        key={animationKey}
        className={`${styles.headerContent} ${
          showFirst ? styles.showFirst : styles.showNext
        }`}
      >
        {showFirst ? <HeaderRakuten /> : <HeaderNext />}
      </div>
    </header>
  );
};

export default Header;
