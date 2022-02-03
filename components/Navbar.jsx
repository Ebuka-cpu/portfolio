import styles from "../styles/Navbar.module.css";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className={styles.container}>
      <Link passHref href="/">EBUE-DEV.</Link>
      <ul className={styles.list}>
      <li className={styles.listItem}>
          <Link href="/">HOME</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/about">ABOUT</Link>
        </li>
        
        <li className={styles.listItem}>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
      <div className={styles.hamburger} onClick={()=>setOpen(!open)}>
          <div className={styles.lines}></div>
          <div className={styles.lines}></div>
          <div className={styles.lines}></div>
      </div>
      <ul className={styles.menu} style={{right: open ? "0px" : "-50vw"}} onClick={()=>setOpen(false)}>
      <li className={styles.menuItem}>
          <Link href="/">HOME</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/about">ABOUT</Link>
        </li>
      
        <li className={styles.menuItem}>
          <Link href="/contact">CONTACT</Link>
        </li>
         
        <button className={styles.button}>
          <a href="/img/EbukaDevcv.docx" download>Download Cv</a>
        </button>

        
      </ul>
    </div>
  );
};

export default Navbar;
