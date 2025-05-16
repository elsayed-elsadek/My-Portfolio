import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const contactLinks = [
    {
      icon: "contact/emailIcon.png",
      alt: "Email icon",
      href: "mailto:elsadek134@email.com",
      text: "Email",
      ariaLabel: "Send me an email"
    },
    {
      icon: "contact/linkedinIcon.png",
      alt: "LinkedIn icon",
      href: "https://www.linkedin.com/in/elsayed-elsadek-061549258",
      text: "LinkedIn",
      ariaLabel: "Visit my LinkedIn profile"
    },
    {
      icon: "contact/githubIcon.png",
      alt: "Github icon",
      href: "https://github.com/elsayed-elsadek",
      text: "GitHub",
      ariaLabel: "Visit my GitHub profile"
    }
  ];

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links} role="list">
        {contactLinks.map((link, index) => (
          <li key={index} className={styles.link}>
            <img
              src={getImageUrl(link.icon)}
              alt={link.alt}
              loading="lazy"
              width="32"
              height="32"
            />
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
