import styles from './NavBarStyle.module.scss';

export const NavComponent = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.navbarLi}>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}