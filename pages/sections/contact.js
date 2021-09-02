import React from "react"

import styles from "../../styles/Contact.module.css"

export default function Contact() {
    return (
        <div className={`${styles.blocContact} bloc`} id="contact">
            <a href="tel:0610646323"><span className={styles.titleThin}>Contactez votre thérapeute</span>06 10 64 63 23</a>
        </div>
    )
}

/*
                    <form id="formContact">
                        <div className="field">
                            <label for="nom">Nom</label>
                            <input type="text" id="nom"></input>
                        </div>
                        <div className="field">
                            <label for="prenom">Prénom</label>
                            <input type="text" id="prenom"></input>
                        </div>
                        <div className="field">
                            <label htmlFor="phone">Téléphone</label>
                            <input type="text" id="phone"></input>
                        </div>
                        <div className="field">
                            <label for="mail">Mail</label>
                            <input type="text" id="mail"></input>
                        </div>
                        <div className="field">
                            <label for="message">Message</label>
                            <textarea type="text" id="message"></textarea>
                        </div>
                        <button>Envoyer</button>
                    </form>
                    */