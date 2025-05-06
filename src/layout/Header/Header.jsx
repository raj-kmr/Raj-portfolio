import styles from './Header.module.css';

function Header() {

    
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <a href="/" className={styles.navElements}>Home</a>
                <section className={styles.rightNav}>
                    <a href="/projects" className={styles.navElements}>Projects</a>
                    <a href="/about" className={styles.navElements}>About</a>
                </section>
            </nav>
        </header>
    );
}

export default Header;
