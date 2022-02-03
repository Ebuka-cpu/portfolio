import { Facebook, GitHub, LinkedIn, LinkRounded, Twitter } from "@material-ui/icons";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}> EBUE-DEV CREATIVE</h1>
        <h1 className={styles.linkTitle}>
          <Link passHref href="/contact">
          <a>
            <span className={styles.linkText}>Lets Work Together</span>
            <Image src="/img/link.png" alt="" width="30" height="30" />
          </a>
          </Link>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          No. 9 Zaria bye pass Jos <br /> Nigeria
        </div>
        <div className={styles.cardItem}>
          CONTACT@EBUE-DEV <br /> 0703 617 6131
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          SOCIAL MEDIA:
          <br /> 
           <a href="https://www.facebook.com/feverest" className={styles.social}><Facebook/></a>
           <a href="https://twitter.com/anyaegbu_ebuka" className={styles.social}><Twitter/></a> 
           <a href="https://www.linkedin.com/in/ebuka-anyaegbu" className={styles.social}><LinkedIn/></a> 
           <a href="https://github.com/Ebuka-cpu" className={styles.social}><GitHub/></a>
        </div>
        <div className={styles.cardItem}>
          © {(new Date(). getFullYear())} EBUE-DEV CREATIVE,
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
