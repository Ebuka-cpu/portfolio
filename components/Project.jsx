import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Project.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  disable: false,
  once: false
});

const Project = () => {
  return (
    <div data-aos="flip-right" data-aos-delay="50" data-aos-duration="1000" className={styles.container}>
      <h1 className={styles.title}>PROJECTS</h1>
      <h3 className={styles.subTitle}>Below are some of my projects</h3>
      <div className={styles.imgContainer}>
          <Image
            src="/img/react-redux.jpg"
            alt=""
            width="500"
            height="300"
            objectFit="contain"
            className={styles.img}
          />

          <Image
            src="/img/reactweb.jpg"
            alt=""
            width="500"
            height="300"
            objectFit="contain"
            className={styles.img}
          />  
      </div>
    </div>
  );
};

export default Project;
