import styles from '../styles/About.module.css'
import Link from 'next/link'
import Icons from './Icons'

export default function About({ about_link }) {
    return (
        <div id={about_link} className={styles.about_container}>
            <img className={styles.profile} src="https://lh3.googleusercontent.com/pw/AIL4fc9CvDGBT7HlEthLC-HSNPea_E6KVdJlvufNADbCFF0IwJibysJ7HFY357sgQXZH8rN7EUu8_VT5xrWOCh5XcI6M6b22f-X2zBGH1XJBsYDJLb2klA=w2400" alt="Huong's profile" />
            <div className="about_body">
                <p class={styles.about_me}>I am a current Computer Science student
                    at the University of Southern California. I am interested in software developement,
                    blockchain, and web development. However, I'm open to learning and checking out other
                    fields such as security, data engineering, infrastructure development, etc. Outside of
                    computer science, I enjoy playing sports, hiking, working out, dabbling in musical instruments,
                    attempting to capture nice shots, and watching shows. I also enjoy building things such as lego,
                    gundam, and keyboards.</p>
                {/* <div className={styles.icons_container}>
                    <a href="https://github.com/nguyenh94" target="_blank">
                        <img className={styles.logos} src="https://lh3.googleusercontent.com/pw/AIL4fc8F9VrWTZolMhkyyR0evu8psCAyoWqk4feVQu2A0RoIanDxiZNhAVyrH4zxTqVVE4mpMDskUHHXzFTaBqSVGu4jO5OMouItXlONQ_MIRDsIFbLAvg=s192-p-k" alt="github_icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/huong-nguyen-756644208/" target="_blank">
                        <img className={styles.logos} src="https://lh3.googleusercontent.com/pw/AIL4fc-SVf-3YN2e4wyjgcoIfkq0wY8kjYbCu-qz71wHVod0juP1swQ3J3rLmDbP7HJ9jhX4NL0SxZl8FnNLEyLYouHcADs0aRJkEAdL8llrDSY-P73bFA=s192-p-k" alt="linkedin_icon" />
                    </a>
                    <a href="https://www.instagram.com/huongbnguyen_/" target="_blank">
                        <img className={styles.logos} src="https://lh3.googleusercontent.com/pw/AIL4fc9sVgfVszaANG_75cCYdoi33SNE3ZVIb-MBvisvBA7fits9I6LNMXW_y7f9n3pqhZH-iPFt2Tp4C8h1yE6MvKp_MCk7mcc1ksH3nRjEuKPiizcNBw=s192-p-k" alt="ig_icon" />
                    </a>
                </div> */}
                <Icons style_container={styles.icons_container} style_logo={styles.logos} />
            </div>
        </div>
    )
}