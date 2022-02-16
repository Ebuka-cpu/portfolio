import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/About.module.css";


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
      staggerChildren: 0.05,
    },
  },
};

const about = () => {
  return (
    <motion.div exit={{opacity: 0}} initial="initial" animate="animate">
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
      
      <motion.div variants={fadeInUp} className={styles.container}>
        <div className={styles.left}>
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
        </div>
        <style jsx global>{`
          .image {
            border-radius: 50%;
            margin-top: -20px;
          }
        `}</style>
        <div className={styles.right}>
          <motion.div variants={fadeInUp} className={styles.desc}>
            <h1 className={styles.title}>ABOUT ME</h1>
            <p className={styles.text}>
              My name is <b>Anyaegbu Ebuka felix</b>. graduate of computer
              science Michael Okpara University Umudike, Abia, Nigeria. I am a
              frontEnd web developer, who is passionate about users experience
              and interaction with the web. I am enthusiatic about learning new
              technogies.
            </p>
            <p className={styles.text}>
              I am passionate about web development, because i love what i do,
              and this has brought about a source of motivation that drives me
              to do my best. In my last job, this passion led me to challenge
              myself daily and learn new skills.
            </p>
            <p className={styles.text}>
              I am an excellent communicator. I pride myself on making sure
              people have the right information because it drives better
              results.
            </p>
            <button className={styles.button}>
              <Link href="/contact" pasHref>
                Contact
              </Link>
            </button>
          </motion.div>
        </div>
      </motion.div>
      
    </>
    </motion.div>
  );
};

export default about;
