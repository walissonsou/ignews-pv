import React from 'react'
import styles from './styles.module.scss'
function Card2() {
    return (
        <div className={styles.cardcontainer}>
            <div className={styles.imagecontainer}>
                <img src="/images/logovictor.png" alt='victorcampeao' />
            </div>
            <div className={styles.cardcontent}>
            <div className={styles.cardtitle}>
                <h3 className={styles.h3}>Plano Anual</h3>
            </div>
            <div className={styles.cardbody}>
                <p> #TeamVictorRicarte
                    <li className={styles.li}>
                        24 consultorias 
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
                        Acessar
                    </a>
                </button>
            </div>
        </div>
    )
}
export default Card2;