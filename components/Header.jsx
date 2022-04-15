import React, { useEffect, useRef } from "react";
import styles from "../styles/Header.module.css";
import { init } from "ityped";
import { Facebook, GitHub, LinkedIn, Twitter } from "@material-ui/icons";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Header = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true,
      strings: ["I build amazing websites...", "I'm a content creator...", "I love everything computing..."],
    });
  }, []);

  return (
    <div data-aos="zoom-in-up" className={styles.container}>
      <h1 className={styles.title}>{"I'm"} Anyaegbu ebuka,</h1>
      <span className={styles.desc}> a frontend web developer</span>
      <h3>
        <span className={styles.designer} ref={textRef}></span>
      </h3>
      <span>
      <a href="https://www.facebook.com/feverest" className={styles.social}><Facebook/></a>
           <a href="https://twitter.com/anyaegbu_ebuka" className={styles.social}><Twitter/></a> 
           <a href="https://www.linkedin.com/in/ebuka-anyaegbu" className={styles.social}><LinkedIn/></a> 
           <a href="https://github.com/Ebuka-cpu" className={styles.social}><GitHub/></a>
      </span>
      <button className={styles.button2}>
          <Link passHref href="/contact">Say Hello!</Link>
        </button>
    </div>
  );
};

export default Header;
