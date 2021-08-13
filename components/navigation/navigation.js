import React, { useEffect, useState } from "react";
import Image from "next/image";

import { Link, animateScroll as scroll} from "react-scroll";

import styles from "./Navigation.module.css"

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
                <Image className={styles.logoImg} src="/logo.svg" alt="Vercel Logo" width={120} height={120} />
                <div className={styles.logoText}>
                    <span>NATHALIE CARTIER</span> Thérapeute Médecines Douces
                </div>
            </div>
            <nav className={styles.menu}>
                <Link activeClass="scrollActive" to="intro" spy={true} smooth={true}>Intro<span></span></Link>
                <Link activeClass="scrollActive" to="propos" spy={true} smooth={true}>À propos<span></span></Link>
                <Link activeClass="scrollActive" to="prestations" spy={true} smooth={true}>Mes prestations<span></span></Link>
                <Link activeClass="scrollActive" to="contact" spy={true} smooth={true}>Contact<span></span></Link>
            </nav>
        </div>
    )
}