import Image from "next/image";
import Link from "next/link";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import styles from "../styles/Intro.module.css";
import Circle from "./Circle";
import { motion } from "framer-motion";

const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true,
      strings: ["Developer", "Designer", "Content Creator"],
    });
  }, []);

  const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing,
    },
  },
};
const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
  return (
    <motion.id exit={{opacity: 0}} initial="initial" animate="animate"  className={styles.container}>
      <Circle backgroundColor="teal" top="-50vh" left="-50vh" />
      <motion.div variants={fadeInUp} className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>EBUE-DEV</span> WEB
          <br /> DEVELOPMENT AGENCY
        </h1>
        <p className={styles.desc}>
          My name is <b>Anyaegbu Ebuka felix</b>. graduate of computer science Michael Okpara 
          University Umudike, Abia, Nigeria. I am a frontEnd web developer, who is 
          passionate about users experience and interaction with the web. I am enthusiatic
          about learning new technogies.
        </p>
        <div className={styles.wrapper}>
          <h3>
            Freelance <span className={styles.designer} ref={textRef}></span>
          </h3>
        </div>
        <div className={styles.buttons}>
        <button className={styles.button}>
          <a href="/img/EbukaDevcv.docx" download>Download Cv</a>
        </button>
        <button className={styles.button2}>
          <Link passHref href="/contact">Say Hello!</Link>
        </button>
        </div>
      </motion.div>
      <div className={styles.card}>
        <motion.div initial={{x: 200, opacity: 0}} animate={{x: 0, opacity:1}} transition={{delay: 0.2}} className={styles.img}>
          <Image
            src="/img/ebuka.png"
            alt=""
            objectFit="cover"
            width={400}
            height={400}
            className="image"
          />
        </motion.div>
        <style jsx global>{`
          .image {
            border-radius: 50%;
            margin-top: -20px;
          }
        `}</style>
      </div>
    </motion.id>
  );
};

export default Intro;
