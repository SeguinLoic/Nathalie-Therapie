import React from "react"
import Image from "next/image"
import Link from "next/link"

import Logo from "../logo/logo.js"

import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <div className={styles.footer} id="footer">
            <div className="row">
                <div className={`col col33 ${styles.colFooter}`}>
                    <Logo footer="footer" />
                </div>
                <div className={`col col33 ${styles.colFooter}`}>
                    <span className={styles.titleFooter}>Cabinet</span>
                    <p className="content">
                        Centre de thérapie La Rebiolle<br/>
                        47 quater avenue de Genève, 74000 Annecy
                    </p>
                </div>
                <div className={`col col33 ${styles.colFooter}`}>
                <span className={styles.titleFooter}>Coordonnées</span>
                <div className="col">
                    <Link href="tel:0610646323">
                        <p className={`content ${styles.colCoord} ${styles.linkFooter}`}>
                        <Image src="/smartphone-orange.svg" width={30} height={30} alt="smartphone" className={styles.picto} />
                        06 10 64 63 23 
                        </p>
                    </Link>
                    <Link href="mailto:contact@nathalietherapie.fr">
                        <p className={`content ${styles.colCoord} ${styles.linkFooter}`}>
                        <Image src="/envelope-orange.svg" width={30} height={30} alt="envelope" className={styles.picto}/>
                        contact@nathalietherapie.fr
                        </p>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}