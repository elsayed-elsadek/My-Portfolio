import React, { useState, useEffect } from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  const fullText = "Hi, I'm Elsayed";
  const typingSpeed = 120;
  const deletingSpeed = 60;
  const pauseTime = 1200;

  useEffect(() => {
    let timeout;
    if (!isDeleting && index < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, index + 1));
        setIndex(index + 1);
      }, typingSpeed);
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, index - 1));
        setIndex(index - 1);
      }, deletingSpeed);
    } else if (index === fullText.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && index === 0) {
      timeout = setTimeout(() => setIsDeleting(false), 600);
    }
    return () => clearTimeout(timeout);
  }, [index, isDeleting, fullText]);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {displayedText}
          <span className={styles.cursor}>|</span>
        </h1>
        <p className={styles.description}>
Front-End Developer specializing in React, and a Computer Science student,<br /> eager to leverage my skills in
building dynamic web applications and contribute to innovative projects in the tech industry.        </p>
        <a href="mailto:elsadek134@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
