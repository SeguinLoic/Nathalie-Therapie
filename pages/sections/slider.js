import React from "react";
import Image from "next/image";
import { Link, animateScroll as scroll} from "react-scroll";

import PrimaryButton from "../../components/buttons/primary/primary-button.js"

import styles from "../../styles/Slider.module.css";

export default function Slider() {
  return (
    <div className={`${styles.slider} bloc`}>
      <div className={`col col40 ${styles.coltext}`}>
        <span className={styles.titleSlider} >Comment puis-je vous aider ?</span>
        <span className={styles.contentSlider} >Vous vivez un mal-être persistant ? Des situations difficiles qui tournent en boucle dans votre vie ? Des douleurs physiques ou émotionnelles ? Une addiction dont vous aimeriez vous débarrasser ?</span>
        <PrimaryButton text="Contactez votre thérapeute Nathalie" page="/#contact"/>
      </div>
      <div className="col col60">
        <div className={styles.figures}>
          <Image src="/man.svg" width={600} height={600} alt="man" className={styles.man} />
          <Image src="/woman.svg" width={600} height={600} alt="woman" className={styles.woman} />
        </div>
      </div>
    </div>
  )
}