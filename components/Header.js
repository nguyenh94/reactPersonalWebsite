import { useEffect } from 'react'
import styles from '../styles/Header.module.css'

export default function Header({ name, statement }) {
  return (
    <div className={styles.landing_header}>
      <p className={styles.statement}>{statement}</p>
      <h1 className={styles.name}>{name}</h1>
      <form
        className={styles.form}
        action="https://docs.google.com/document/d/10ywe3pKhu_VMib4MUWrDfGBkCqlLWsL4/edit?usp=sharing&ouid=108960673626390090993&rtpof=true&sd=true"
        target="_blank"
      >
        <button type="submit" className={styles.resume_button}>Resume</button>
      </form>
    </div>
  )
}


