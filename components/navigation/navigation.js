import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll} from "react-scroll";

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
                <Link activeClass="scrollActive" to="intro" spy={true} smooth={true}>Intro<span></span></Link>
                <Link activeClass="scrollActive" to="propos" spy={true} smooth={true}>À propos<span></span></Link>
                <Link activeClass="scrollActive" to="prestations" spy={true} smooth={true}>Mes prestations<span></span></Link>
                <Link activeClass="scrollActive" to="contact" spy={true} smooth={true}>Contact<span></span></Link>
            </nav>
        </div>
    )
}