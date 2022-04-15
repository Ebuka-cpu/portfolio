import Image from "next/image";
import Link from "next/link";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import styles from "../styles/Intro.module.css";
import Circle from "./Circle";
import { aboutMe, bio} from "../data"

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


  return (
    <div data-aos="zoom-in-up" data-aos-delay="50">

    
    <div className={styles.container}>
      <Circle backgroundColor="teal" top="-50vh" left="-50vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>EBUE-DEV</span> WEB
          <br /> DEVELOPMENT AGENCY
        </h1>
        <p className={styles.desc}>
         {bio.aboutMe}
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
      </div>
      <div className={styles.card}>
        <div className={styles.img}>
          <Image
            src="/img/ebuka.png"
            alt=""
            objectFit="cover"
            width={400}
            height={400}
            className="image"
          />
        </div>
        <style jsx global>{`
          .image {
            border-radius: 50%;
            margin-top: -20px;
          }
        `}</style>
      </div>
    </div>
    </div>
  );
};

export default Intro;
