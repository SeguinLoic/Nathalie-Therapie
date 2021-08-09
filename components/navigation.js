import React from "react";
import Image from "next/image";
import Link from "next/link"

import styles from "../styles/Navigation.module.css"

export default function Navigation() {
    return (
        <div className={styles.navigation}>
            <Link href="/" passHref>
                <Image src="/logo.svg" alt="Vercel Logo" width={350} height={85} />
            </Link>
            <nav className={styles.menu}>
                <Link href="/">Accueil</Link>
                <Link href="/">À propos</Link>
                <Link href="/">Mes prestations</Link>
                <Link href="/">Contact</Link>
            </nav>
        </div>
    )
}