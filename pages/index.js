import Head from 'next/head'
import Image from 'next/image'
import Intro from '../components/Intro'
import Services from '../components/Services'
import styles from '../styles/Home.module.css'
import {data} from "../data"
import Testimonials from '../components/Testimonials'
import Skills from '../components/Skills'


export default function Home({services}) {
  console.log(services)
  return (
    <div className={styles.container}>
      <Head>
        <title>EBUE DEV</title>
        <meta name="description" content="next beginner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Intro/>
        <Services services={services}/>
        <Skills/>
        <Testimonials/>
        
    </div>
  )
}

export const getStaticProps = async () =>{
  const services = data;
  return{
    props:{services}
  }
}