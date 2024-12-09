import styles from './FooterStyle.module.scss';

export const FooterComponent = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.footerText}>Footer</p>
        </footer>
    );
}