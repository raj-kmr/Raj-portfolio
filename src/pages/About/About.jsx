import styles from "./about.module.css";

function About () {

    return (
        <section className={styles.aboutSection}>
            <div className={styles.heading}>
                <h1>About Me</h1>
            </div>

            <div className={styles.bio}>
                <p>
                I’m a curious builder at heart, crafting digital experiences that blend design, functionality, and performance. With a full-stack skill set and a passion for clean, intuitive interfaces, I thrive at the intersection of code and creativity. Whether it’s bringing a UI to life or architecting backend logic, I’m always exploring new technologies and turning ideas into interactive reality.
                </p>
            </div>
        </section>
    )
}

export default About