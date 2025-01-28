import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/frontend-icon.png")} alt="Cursor icon"
              style={{ width: "15%" }} />
            <div className={styles.aboutItemText}
            >
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites using modern technologies like React.js.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/webmaster.png")} alt="Server icon"
              style={{ width: "15%" }} />
            <div className={styles.aboutItemText}>
              <h3>Training with Web Master</h3>
              <p>
                Completed intensive training in frontend development, focusing on
                responsive design, performance optimization, and teamwork.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/khamsat.png")} alt="UI icon"
              style={{ width: "15%", marginRight: "10px" }} />
            <div className={styles.aboutItemText}>
              <h3>Freelance Work</h3>
              <p>
                Delivering custom web solutions on Khamsat, specializing in
                user-friendly interfaces and efficient code.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
