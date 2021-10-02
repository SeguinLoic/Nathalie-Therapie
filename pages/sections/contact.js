import React from "react"

import styles from "../../styles/Contact.module.css"

export default function Contact() {
    return (
        <div className={`${styles.blocContact} bloc`} id="contact">
            <a href="tel:0610646323"><span className={styles.titleThin}>Contactez votre thérapeute</span>06 10 64 63 23</a>
        </div>
    )
}