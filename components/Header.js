import styles from '../styles/Header.module.css'

export default function Header({ name, statement }) {
  return (
    <div className={styles.landing_header}>
      <p className={styles.statement}>{statement}</p>
      <h1 className={styles.name}>{name}</h1>
      <form action="">
        <button type="submit" className={styles.resume_button}>Resume</button>
      </form>
      {/* <a className={styles.resume_button} href="">Resume</a> */}
    </div>
  )
}
