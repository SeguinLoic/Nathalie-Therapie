import React from "react";
import Link from "next/link";

import styles from "./PrimaryButtons.module.css"

export default function PrimaryButton({text, page}) {
  return (
    <Link href={`${page}`}>
      <a className={styles.primaryButton}>{text}</a>
    </Link>
  )
}