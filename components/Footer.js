import styles from '../styles/Footer.module.css'
import Icons from './Icons'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p className={styles.email_footer}>huongbng@usc.edu</p>
        <Icons style_container={styles.icons_container} style_logo={styles.logos} />
        <p className={styles.copyright_footer}>© 2022 by Huong Nguyen</p>
      </footer>
    </>
  )
}
