import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Index.module.css'

import Navigation from "../components/navigation/navigation.js"
import Slider from  "./sections/slider.js"
import Propos from  "./sections/propos.js"
import Prestations from  "./sections/prestations.js"
import Contact from  "./sections/contact.js"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nathalie Thérapie | Thérapeute en hypnose et soins énergétiques à Annecy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="header">
        <Navigation />
      </div>
      <div className={styles.content}>
        <Slider />
        <Propos />
        <Prestations />
        <Contact />
      </div>

    </div>
  )
}
