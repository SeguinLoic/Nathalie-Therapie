import React from "react";
import Image from "next/image";
import Link from "next/link"

import styles from "../styles/Navigation.module.css"

export default function Navigation() {
    return (
        <div className={styles.navigation}>
            <div className={styles.logo}>
                <Image src="/logo-3.svg" alt="Vercel Logo" width={120} height={120} />
                <div className={styles.logoText}>
                    <span>NATHALIE CARTIER</span> Thérapeute Médecines Douces
                </div>
            </div>
            <nav className={styles.menu}>
                <Link href="/">Accueil</Link>
                <Link href="/">À propos</Link>
                <Link href="/">Mes prestations</Link>
                <Link href="/">Contact</Link>
            </nav>
        </div>
    )
}