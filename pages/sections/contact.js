import React from "react"

export default function Contact() {
    return (
        <div className="bloc" id="contact">
            <h2>Coordonnées et contact</h2>
            <div className="row">
                <div className="col col60">
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
                            <label for="phone">Téléphone</label>
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
                </div>
                <div className="col col40">
                    <p className="content">
                        Je consulte au Centre de thérapie La Rebiolle
                        47 quater avenue de Genève
                        74000 Annecy
                        vous pouvez me contacter au
                        0610646323
                    </p>
                </div>
            </div>
        </div>
    )
}