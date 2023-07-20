import styles from '../styles/About.module.css'
import Link from 'next/link'
import Icons from './Icons'

export default function About({ about_link }) {
    return (
        <div id={about_link} className={styles.about_container}>
            <img className={styles.profile} src="https://lh3.googleusercontent.com/pw/AIL4fc9CvDGBT7HlEthLC-HSNPea_E6KVdJlvufNADbCFF0IwJibysJ7HFY357sgQXZH8rN7EUu8_VT5xrWOCh5XcI6M6b22f-X2zBGH1XJBsYDJLb2klA=w2400" alt="Huong's profile" />
            <div className="about_body">
                <p class={styles.about_me}>I am a current Computer Science student
                    at the University of Southern California. My main interests are software developement,
                    blockchain, and web development. However, I'm open to learning and checking out other
                    fields such as security, data engineering, and infrastructure development. Outside of
                    computer science, I enjoy playing sports, hiking, working out, dabbling in musical instruments,
                    attempting to capture nice shots, and watching shows. I also enjoy building legos,
                    gundams, and keyboards.</p>
                <Icons style_container={styles.icons_container} style_logo={styles.logos} />
            </div>
        </div>
    )
}