import styles from '../styles/Projects.module.css'

export default function Projects({ projects_link }) {
    return (
        <div id={projects_link} className={styles.projects_container}>
            <h2 className={styles.projects_header}>Projects</h2>
            <div className={styles.project}>
                <div className={styles.project_title}>
                    <a href="https://github.com/nguyenh94/sushiGo" target="_blank" className={styles.project_name}>
                        <h2>Sushi Go</h2>
                        <h2 className={styles.arrow}>»</h2>
                    </a>
                </div>
                <h3 className={styles.project_date}>April 2022 - May 2022</h3>
                <p className={styles.project_description}>
                    This is a classic card game that's fun and quick to play with friends.
                    Regardless of whether you are a sushi lover, Sushi Go is a great game to
                    bond with your friends! If you have never played the game before, you
                    will have a chance to try it out electronically in a 2 player mode. The game
                    is developed in Python utilizing a variety of data structures such as lists
                    and dictionaries, conditional statements, arithmetic operators, functions,
                    classes and objects, and loops.
                </p>
            </div>
            <div className={styles.project}>
                <div className={styles.project_title}>
                    <a href="https://github.com/nguyenh94/pocket_chef" target="_blank" className={styles.project_name}>
                        <h2>Pocket Chef</h2>
                        <h2 className={styles.arrow}>»</h2>
                    </a>
                </div>
                <h3 className={styles.project_date}>March 2022 - May 2022</h3>
                <p className={styles.project_description}>
                    This is a multi-threaded dynamic web application developed by a team of 6 people where I
                    was a part of the back-end sub-team. The program is developed using
                    Java, HTML/CSS, JSP, MySQL, and JSON parsing. We have also implemented
                    web-servlets, a Java programming language class that is used to extend
                    the capabilities of servers that host applications accessed by means of
                    a request-response programming mode. To pass data and user information
                    across different pages as well as the front-end and back-end, we utilized
                    cookies and ArrayList parsing.
                </p>
            </div>
            <div className={styles.project}>
                <div className={styles.project_title}>
                    <a href="https://github.com/nguyenh94/Gas-Go" target="_blank" className={styles.project_name}>
                        <h2>Gas$Go</h2>
                        <h2 className={styles.arrow}>»</h2>
                    </a>
                </div>
                <h3 className={styles.project_date}>April 2022 - May 2022</h3>
                <p className={styles.project_description}>
                    Out of the many essentials we have to pay for, money spent on gas might
                    be the hardest to keep track of due to the always changing prices. Gas$Go
                    is an iOS application in Swift designed for users to keep track of their
                    gas receipts as well as the date and location for each gas fill up. The app
                    also supports Vietnamese alongside English. Once logged in, you can keep
                    track of your profile, store your car model, and your gas receipts. Utilizing
                    TableView, delegates and datasource, UIImage picker, localization and internalization,
                    segues, and other techniques. To authorize users for registration and login, I used
                    Firebase Authentication. I also use Firestore and Firebase Storage to store the users’
                    profile pictures and receipts they entered.
                </p>
            </div>
            <div className={styles.project}>
                <div className={styles.project_title}>
                    <a href="https://github.com/nguyenh94/WeatherReport" target="_blank" className={styles.project_name}>
                        <h2>WeatherReport</h2>
                        <h2 className={styles.arrow}>»</h2>
                    </a>
                </div>
                <h3 className={styles.project_date}>Spring 2022</h3>
                <p className={styles.project_description}>
                    WeatherReport is a program developed in Python that takes cities as inputs and then retrieves
                    weather report information from Weather API for the corresponding city and outputs the report.
                    This project utilizes functions for program logistics, lists to store different report details
                    and cities, and JSON parsing to retrieve weather information from the API.
                </p>
            </div>
        </div>
    )
}