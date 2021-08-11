import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"

import styles from "../../styles/Navigation.module.css"

export default function Navigation() {
    
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setIsSticky(window.scrollY > 90);
        })
    }, []) 

    return (
        <div className={`${styles.navigation} ${isSticky ? styles.sticky : ""}`}>
            <div className={styles.logo}>
                <Image className={styles.logoImg} src="/logo-3.svg" alt="Vercel Logo" width={120} height={120} />
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