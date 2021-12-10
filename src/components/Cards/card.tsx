import React from 'react'
import styles from './styles.module.scss'
function Card() {
    return (
        <div className={styles.cardcontainer}>
            <div className={styles.imagecontainer}>
                <img src="/images/logovictor.png" alt='victorcampeao' />
            </div>
            <div className={styles.cardcontent}>
            <div className={styles.cardtitle}>
                <h3 className={styles.h3}>Plano Trimestral </h3>
            </div>
            <div className={styles.cardbody}>
                <p> #TeamVictorRicarte 
                <li className={styles.li}>
                        3 consultorias
                    </li>
                    <li className={styles.li}>
                        Ebook
                    </li>
                </p>
            </div>
            </div>
            
            <div className={styles.btn}>
                <button className={styles.button}>
                    <a className={styles.a}>
                        Comprar
                    </a>
                </button>
            </div>
        </div>
    )
}
export default Card;