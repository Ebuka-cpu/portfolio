import { motion } from 'framer-motion';
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Services.module.css'
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

const Services = ({services}) => {
    return (
        <motion.div exit={{opacity: 0}} initial="initial" animate="animate" className={styles.container}>
            <h1 className={styles.title}>PPROJECTS</h1>
            <div className={styles.services}>
            {services.map(service=>(
                <Link passHref key={service.id} href={`/product/${service.name}`}>
                    <div className={styles.service}>
                        <div className={styles.desc}>{service.desc}</div>
                        <span className={styles.cat}>{service.title}</span>
                        <div className={styles.media}>
                            {service.video ? (
                                <video src={`/img/${service.video}`} loop autoPlay className={styles.video} />
                            ) : (
                                <Image src={`/img/${service.photo}`}  alt='' width="100%" height="100%" layout='responsive' objectFit='cover' className={styles.img}  />
                            )}
                        </div>
                    </div>
                </Link>
            ))}
            </div>
        </motion.div>
    )
}

export default Services
