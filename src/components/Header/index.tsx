import React from 'react';
import { SignButton } from '../SingInButton';
import styles from './styles.module.scss';
import Link from 'next/link'
import { useRouter } from 'next/router';

export function Header() {
    
    const { asPath } = useRouter()


    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logov.png" alt="logo_ignews" />
                <nav className={styles.links}>
                    <Link href="/" prefetch>
                        <a className={asPath === '/' ? styles.active : ' '} >INÍCIO </a>
                    </Link>
                   <Link href="/sobre" prefetch>
                        <a className={asPath === '/sobre' ? styles.active : ' '} >  SOBRE </a>
                    </Link>
                    <Link  href="/consultoria" prefetch>
                        <a className={asPath === '/consultoria' ? styles.active : ' '}> BLOG </a>
                    </Link>
                    <Link href="/alunos" prefetch>
                        <a className={asPath === '/alunos' ? styles.active : ' '}> ALUNO </a>
                    </Link>
                    <Link href="/results" prefetch>
                        <a className={asPath === '/results' ? styles.active : ' '}> RESULTADOS </a>
                    </Link>
                </nav>
                <SignButton />
            </div>

        </header>
    )
}

