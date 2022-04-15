import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import { useState } from "react";
import styles from "../styles/Skills.module.css";
import AOS from "aos";
import "aos/dist/aos.css";



const Skills = () => {
  const [showSkill1, setShowSkill1] = useState(false);
  const [showSkill2, setShowSkill2] = useState(false);
  const [showSkill3, setShowSkill3] = useState(false);

  return (
    <div data-aos="zoom-in-up" className={styles.container}>
      <h1 className={styles.title}>MY TECHNICAL SKILL SET</h1>
      <div className={styles.wrapper}>
        <ul className={styles.skill}>
          <li
            className={styles.tools}
            onClick={() => setShowSkill2(!showSkill2)}
          >
            Frontend Development{" "}
            {showSkill2 ? (
              <KeyboardArrowUp className={styles.arrow} />
            ) : (
              <KeyboardArrowDown className={styles.arrow} />
            )}
            {showSkill2 && (
              <div className={styles.dev}>
                Html5, Css3, Javascript, Tailwindcss, React/Nextjs, React-Redux, 
              </div>
            )}
          </li>
          <li
            className={styles.tools}
            onClick={() => setShowSkill3(!showSkill3)}
          >
            CMS{" "}
            {showSkill3 ? (
              <KeyboardArrowUp className={styles.arrow} />
            ) : (
              <KeyboardArrowDown className={styles.arrow} />
            )}
            {showSkill3 && <div className={styles.dev}>Wordpress Cms</div>}
          </li>
          <li
            className={styles.tools}
            onClick={() => setShowSkill1(!showSkill1)}
          >
            Other Tools {showSkill1 ? (
              <KeyboardArrowUp className={styles.arrow} />
            ) : (
              <KeyboardArrowDown className={styles.arrow} />
            )}
            {showSkill1 && <div className={styles.dev}>Git/GitHub</div>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
