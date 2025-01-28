import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Elsayed</h1>
        <p className={styles.description}>
          A dedicated Front-End Developer and Computer Science student with a passion for Software Engineering. Eager to leverage skills in creating dynamic and responsive web applications, with a strong commitment to continuous learning and professional growth in the tech industry.
        </p>
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
