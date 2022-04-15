import React from "react";
import { aboutMe, bio } from "../data";
import styles from "../styles/AboutMe.module.css";
import "aos/dist/aos.css";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div data-aos="zoom-in-up" data-aos-delay="50" className={styles.container}>
      <img src="/img/ebuka.png" className={styles.img} />

      <p className={styles.desc}>
        <h1 className={styles.aboutMe}>ABOUT ME</h1>
        <div className={styles.bio}>{bio.aboutMe}..</div>
        <Link href="/about">
          <a className={styles.readMore}>Read more...</a>
        </Link>
      </p>
    </div>
  );
};

export default AboutMe;
