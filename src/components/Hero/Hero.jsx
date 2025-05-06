import styles from "./hero.module.css"

function Hero() {
    return (
        <>
            <section className={styles.landingPage}>
                <div className={styles.heroDescription}>
                    <h1>Hello, I'm <span>Raj</span></h1>
                    <p>
                        I'm a Full-Stack developer with a focus on building clean, accessible,
                        and responsive web interfaces.<br />
                        I specialize in turning design concepts into efficient, maintainable
                        code using HTML, CSS, and JavaScript.<br />
                        Currently looking for opportunities to collaborate on meaningful web
                        projects.
                    </p>
                </div>

                <div className={styles.hero}>
                    <img src="/images/pfpghibli.png" className={styles.heroImg}  alt="" />
                </div>
            </section>
        </>
    )
}

export default Hero