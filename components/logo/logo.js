import React from "react"

import Image from "next/image"

import styles from "./Logo.module.css"

export default function Logo({sticky, footer}) {
    return (
        <div className={`${styles.logo} ${sticky ? styles.sticky : ""} ${footer ? styles.footer : ""}`}>
            <Image className={styles.logoImg} src="/logo.svg" alt="Logo" width={120} height={120} />
            <div className={styles.logoText}>
                <span>NATHALIE CARTIER</span> Thérapeute Médecines Douces
            </div>
        </div>
    )
}