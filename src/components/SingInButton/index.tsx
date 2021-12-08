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
            onClick={() => signOut()}
        >
            <FaGoogle color="#32f800" />
            {session.user.name}
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
               
            />
        </button>
    );
}