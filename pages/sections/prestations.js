import React from "react"
import Image from "next/image";

import styles from "../../styles/Prestations.module.css"

export default function Prestations() {
    return (
      <div className="bloc" id="prestations">
          <h2 className="center">Mes prestations</h2>
          <div className="row">
            <div className={`col col10 dispNone`}></div>
            <div className={`col col40 ${styles.colPresta}`}>
                <div className={styles.imageParent}>
                  <Image src="/hands-2.jpg" width={900} height={600} layout="responsive" alt="Mains" />
                </div>
                <p className={styles.titlePresta}>Votre séance de soins</p>
                <p className="content">Votre séance sera de 1 heure environ
                  Elle se compose ainsi : 1⁄2 heure de thérapie et 1⁄2 de soin énergétique ou hypnose
                </p>
                <p className={styles.tarifs}>60€</p>
            </div>
            <div className={`col col40 ${styles.colPresta}`}>
                <div className={styles.imageParent}>
                  <Image src="/cigaret-2.jpg" width={900} height={600} layout="responsive" alt="Cigarette" />
                </div>
                <p className={styles.titlePresta}>Votre séance addiction</p>
                <p className="content">
                  Pour travailler sur une addiction je vous propose une séance de 1h15
                  Elle se compose ainsi : 1⁄2 heure de thérapie et 3⁄4 d&apos;heure d&apos;hypnose
                </p>
                <p className={styles.tarifs}>80€</p>
            </div>
            <div className={`col col10 dispNone`}></div>
          </div>
      </div>
    )
}