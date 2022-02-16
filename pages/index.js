import Head from "next/head";
import Image from "next/image";
import Intro from "../components/Intro";
import Services from "../components/Services";
import styles from "../styles/Home.module.css";
import { data } from "../data";
import Testimonials from "../components/Testimonials";
import Skills from "../components/Skills";
import { motion } from "framer-motion";

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

export default function Home({ services }) {
  console.log(services);
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">

      <motion.div variants={stagger}>
        <motion.div variants={fadeInUp} className={styles.container}>
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
          <Intro />
          {/* <Project/> */}
          <Services services={services} />
          <Skills />
          <Testimonials />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export const getStaticProps = async () => {
  const services = data;
  return {
    props: { services },
  };
};
