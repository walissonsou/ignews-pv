import { FaGoogle } from 'react-icons/fa';

import styles from './styles.module.scss';
import { signIn, signOut, useSession } from 'next-auth/react'

import { FiX } from 'react-icons/fi'

export function SignButton() {

    const { data: session } = useSession()
    return session ? (
        <button
            type="button"
            className={styles.singInButton}
        >
            <FaGoogle color="#32f800" />
            Walisson Souza
            <FiX />
        </button>
    ) : (
        <button
            type="button"
            className={styles.singInButton}
            onClick={() => signIn()}>

            <FaGoogle color="#eba417" />
            Acessar com o Google
            <FiX
                onClick={() => signOut()}
            />
        </button>
    );
}