import React, { useRef, memo } from 'react';
import styles from './navbar.module.css';
import logo from './logo.png';

const Navbar = memo(
    (props) => {
        const inputRef = useRef();
        const formRef = useRef();
        const onSubmit = (event) => {
            event.preventDefault();
            const query = inputRef.current.value;
            formRef.current.reset();
            props.searchVideo(query);
        }
        return (
            <nav className={styles.navbar}>
                <span className={styles.navbarTitle}>
                    <img className={styles.navbarTitleIcon} src={logo}></img>
                    <span className={styles.navbarTitleName}>Youtube</span>
                </span>
                <form ref={formRef} className={styles.navbarSearch} onSubmit={onSubmit}>
                    <input ref={inputRef} className={styles.navbarSearchInput} type="text" placeholder="Search..." />
                    <button className={styles.navbarSearchButton}>
                        <i className={`fas fa-search ${styles.navbarSearchIcon}`}></i>
                    </button>
                </form>
                <span className={styles.navbarUser}>
                    <i className={`fas fa-user ${styles.navbarUserIcon}`}></i>
                </span>
            </nav>
        )
    }
);

export default Navbar;