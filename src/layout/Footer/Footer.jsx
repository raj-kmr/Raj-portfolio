import styles from "./Footer.module.css";

function Footer() {

    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p>&copy; 2025 Raj</p>
                    <div className={styles.footerLinks}>
                        <a href="https://github.com/raj-kmr" target="_blank">
                            <img src="/icons/github.png" alt="" height="20px" width="20px"/>
                        </a>
                        <a href="mailto:raj3373y@gmail.com">
                            <img src="/icons/email.png" alt="" height="20px" width="20px"/>
                        </a>
                        <a href="https://www.linkedin.com/in/raj-kumar-4a493a257" target="_blank">
                            <img src="/icons/linkedin.png" alt="" height="20px" width="20px"/>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer