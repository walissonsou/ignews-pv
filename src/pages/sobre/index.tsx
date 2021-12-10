import Head from 'next/head'
import styles from './styles.module.scss'
import { Button } from "reactstrap";
import React from "react";
import Card from '../../components/Cards/card'
import Card1 from '../../components/Cards/card1';
import Card2 from '../../components/Cards/card2';

export default function Sobre() {
    return (
        <main className={styles.contentmain}>
            <h2 className={styles.h2}>Victor Ricarte  </h2>



            <div className={styles.h1}>
                <Head>
                    <title> Sobre | VR </title>
                </Head>
                <div className={styles.card}>
                    <Card />
                    <div className={styles.card1}>
                    <Card1 />
                    </div>
                    <div className={styles.card2}>
                    <Card2 />
                    </div>
                </div>




            </div>
        </main>




    )
}
