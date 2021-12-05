import { FaGoogle } from 'react-icons/fa';

import styles from './styles.module.scss';



import { FiX } from 'react-icons/fi'

export function SignButton() {
    const responseGoogle = (response) => {
        console.log(response)
    }
    const isUserLoggedIn = true;

    return isUserLoggedIn ? (
        <button
            type="button"
            className={styles.singInButton} >


            <FaGoogle color="#32f800" />
            Walisson Souza
            <FiX />

        </button>
    ) : (
        <button
            type="button"
            className={styles.singInButton} >
            <FaGoogle color="#eba417" />
            Acessar com o Google </button>

    );




}