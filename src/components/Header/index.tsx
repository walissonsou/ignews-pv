import React from 'react';
import { SignButton } from '../SingInButton';
import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logov.png" alt="logo_ignews" />
                <nav className={styles.links}> 
                    <a className={styles.active}>INÍCIO </a>
                    <a href="http://localhost:3000/sobre" className={styles.active}>  SOBRE </a>
                    <a href="http://localhost:3000/consultoria" className={styles.active}> CONSULTORIA </a>
                    <a href="http://localhost:3000/contato" className={styles.active}> CONTATO </a>
                 </nav>
                 <SignButton />
            </div>
           
        </header>
    )
}

