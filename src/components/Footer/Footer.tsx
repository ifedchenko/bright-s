import FooterRakuten from "./FooterRakuten/FooterRakuten";
import FooterNext from "./FooterNext/FooterNext";
import React, { useEffect, useState } from "react";
import styles from "./Footer.module.css";

interface FooterProps {
  showFirst: boolean;
}

const Footer: React.FC<FooterProps> = ({ showFirst }) => {
  const [animationKey, setAnimationKey] = useState(0);
  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
  }, [showFirst]);

  return (
    <footer>
      <div
        key={animationKey}
        className={`${styles.footerContent} ${
          showFirst ? styles.showFirst : styles.showNext
        }`}
      >
        {showFirst ? <FooterRakuten /> : <FooterNext />}
      </div>
    </footer>
  );
};

export default Footer;
