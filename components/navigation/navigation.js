import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll} from "react-scroll";
import Image from "next/image"

import Logo from "../logo/logo.js"

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
            <Logo sticky={isSticky}/>
            <nav className={styles.menu}>
                <Link activeClass="scrollActive" to="intro" spy={true} smooth={true} className={styles.notMobile}>Intro<span></span></Link>
                <Link activeClass="scrollActive" to="propos" spy={true} smooth={true} className={styles.notMobile}>À propos<span></span></Link>
                <Link activeClass="scrollActive" to="prestations" spy={true} smooth={true} className={styles.notMobile}>Mes prestations<span></span></Link>
                <Link activeClass="scrollActive" to="contact" spy={true} smooth={true} className={styles.notMobile}>Contact<span></span></Link>
                <a href="tel:0610646323" className={styles.onMobile}><Image src="/smartphone-orange.svg" width={30} height={30} alt="smartphone" className={styles.picto} /><p className={styles.txtNumber}>06 10 64 63 23</p></a>
            </nav>
        </div>
    )
}