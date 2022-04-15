import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/About.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
      once: false,
      disable: false,
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Head>
        <title>EBUE DEV</title>
        <meta
          name="description"
          content="Anyaegbu Ebuka Felix hails from Imo state.
         He is a graduate of computer science from Michael Okpara Uni. of Agriculture Umudike, Abia, Nigeria.
         Ebuka as he is often called is a frontend web developer."
        />
        <link rel="icon" href="/img/ebuka.png" />
      </Head>
      
      <div data-aos="zoom-in-up" className={styles.container}>
        <div className={styles.left}>
          <div data-aos="zoom-in-up" className={styles.img}>
            <Image
              src="/img/ebuka.png"
              alt=""
              objectFit="cover"
              width={400}
              height={400}
              className="image"
            />
          </div>
        </div>
        <style jsx global>{`
          .image {
            border-radius: 50%;
            margin-top: -20px;
          }
        `}</style>
        <div data-aos="zoom-in-up" className={styles.right}>
          <div data-aos="zoom-in-up" className={styles.desc}>
            <h1 data-aos="zoom-in-up" className={styles.title}>ABOUT ME</h1>
            <p data-aos="zoom-in-up" className={styles.text}>
              My name is <b>Anyaegbu Ebuka felix</b>. graduate of computer
              science Michael Okpara University Umudike, Abia, Nigeria. I am a
              frontEnd web developer, who is passionate about users experience
              and interaction with the web. I am enthusiatic about learning new
              technogies.
            </p>
            <p data-aos="zoom-in-up" className={styles.text}>
              I am passionate about web development, because i love what i do,
              and this has brought about a source of motivation that drives me
              to do my best. In my last job, this passion led me to challenge
              myself daily and learn new skills.
            </p>
            <p data-aos="zoom-in-up" className={styles.text}>
              I am an excellent communicator. I pride myself on making sure
              people have the right information because it drives better
              results.
            </p>
            <button data-aos="zoom-in-up" className={styles.button}>
              <Link href="/contact" pasHref>
                Contact
              </Link>
            </button>
          </div>
        </div>
      </div>
      
    </>

  );
};

export default About;
