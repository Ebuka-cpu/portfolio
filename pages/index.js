import Head from 'next/head'
import Image from 'next/image'
import Intro from '../components/Intro'
import Services from '../components/Services'
import styles from '../styles/Home.module.css'
import {data} from "../data"
import Testimonials from '../components/Testimonials'
import Skills from '../components/Skills'
import Project from '../components/Project'


export default function Home({services}) {
  console.log(services)
  return (
    <>
      <div className={styles.container}>
      <Head>
      <title>EBUE DEV</title>
        <meta name="description" content="Anyaegbu Ebuka Felix hails from Imo state.
         He is a graduate of computer science from Michael Okpara Uni. of Agriculture Umudike, Abia, Nigeria.
         Ebuka as he is often called is a frontend web developer." />
        <link rel="icon" href="/img/ebuka.png" />
      </Head>
        <Intro/>
        {/* <Project/> */}
         <Services services={services}/> 
        <Skills/>
        <Testimonials/>
        
    </div>
    </>
  )
    
}

export const getStaticProps = async () =>{
  const services = data;
  return{
    props:{services}
  }
}