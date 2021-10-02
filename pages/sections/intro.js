import React from "react";

import styles from "../../styles/Intro.module.css"

export default function Intro() {
  return (
    <div className={`bloc ${styles.intro}`} id="intro">
      <div className="row">
        <div className="col col20"></div>
        <div className="col col60 center">
          <h1><span className="debutTitle">Nathalie Cartier</span>, votre thérapeute en soins énergétiques à Annecy</h1>
          <p className="content">Osez le premier pas. Je vous propose mon accompagnement en douceur. 
          Grâce à la thérapie nous allons ensemble trouver le point de départ de votre mal être, 
          puis j&apos;utiliserai soit le protocole soin énergétique soit une hypnose. 
          À travers mes soins vous obtiendrez toujours ce qui est juste pour vous.
          Bienvenue sur le chemin de la guérison !</p>
        </div>
        <div className="col col20"></div>
      </div>
    </div>
  )
}