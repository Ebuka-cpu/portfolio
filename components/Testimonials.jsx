import styles from "../styles/Testimonials.module.css";
import Circle from "./Circle";
import { users } from "../data";
import Image from "next/image";
import { Facebook } from "@material-ui/icons";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  return (
    <div data-aos="zoom-in-up" data-aos-delay="1000" className={styles.container}>
      <Circle backgroundColor="darkblue" top="-70vh" left="0" right="0" />
      <h1 data-aos="zoom-in-up" className={styles.title}>TESTIMONIALS</h1>
      <div className={styles.wrapper}>
        {users.map((user) => (
          <div key={user.id} className={styles.card}>
            {/* <Image width="30" height="30" alt="" src={`/img/${user.logo}`} /> */}
            
            <p className={styles.comment}>{user.comment}</p>
            <div className={styles.person}>
              
              <div className={styles.info}>
                <span className={styles.username}>{user.name}</span>
                <span className={styles.jobTitle}>{user.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
