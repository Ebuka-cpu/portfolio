import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Project.module.css";

const Project = () => {
  return (
    <div className={styles.container}>
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
