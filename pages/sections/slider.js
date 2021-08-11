import React from "react";
import Image from "next/image";
import styles from "../../styles/Slider.module.css";

export default function Slider() {
    return (
        <div className={styles.slider}>
        <div className={`${styles.col} ${styles.coltext}`}>
            <span className={styles.titleSlider} >Envie de vous sentir léger ? En paix ?</span>
            <button className={styles.buttonSlider}>Contactez-nous</button>
        </div>
        <div className={styles.col}>
            <div className={styles.figures}>
            <Image src="/fond.png" width={401} height={361} alt="fond" />
            <Image src="/man.svg" width={600} height={600} alt="man" className={styles.man} />
            <Image src="/woman.svg" width={600} height={600} alt="woman" className={styles.woman} />
            </div>
        </div>
        </div>
    )
}