import Link from 'next/link'
import styles from '../styles/Nav.module.css'

export default function Nav({ about, about_link, projects, projects_link }) {
    return (
        <div className={styles.nav_bar}>
            <div className={styles.nav_item}>
                <a href={about_link}>{about}</a>
            </div>
            <div className={styles.nav_item}>
                <a href={projects_link}>{projects}</a>
            </div>
        </div>
    )
}