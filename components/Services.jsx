
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Services.module.css'
import "aos/dist/aos.css";



const Services = ({services}) => {
    return (
        <div data-aos="zoom-in-up" className={styles.container}>
            <h1 data-aos="zoom-in-up" className={styles.title}>PPROJECTS</h1>
            <div data-aos="zoom-in-up" className={styles.services}>
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
        </div>
    )
}

export default Services
