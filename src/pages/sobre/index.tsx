import Head from 'next/head'
import styles from './styles.module.scss'
import { Button } from "reactstrap";
import React from "react";

export default function Sobre() {
    return (
        <main className={styles.contentmain}>
            <h2 className={styles.h2}>Victor Ricarte  </h2>
            <>
      <Button
        className="btn-icon-only rounded-circle"
        color="facebook"
        type="button"
      >
        {" "}
        <span className="btn-inner--icon">
          <i className="fab fa-facebook"></i>
        </span>
      </Button>
    
    </>
            

            <div className={styles.h1}>
                <Head>
                    <title> Sobre | VR </title>
                </Head>





                <span className={styles.span}>
                    <ul className={styles.ul}>
                        
                        <li>

                            Graduado em Licenciatura Plena em Educação Física pela Fundação Karnig Bazarian - Itapetininga/SP
                            CREF -
                        </li>
                        <li>
                            Pós Graduação - FMU - Personal Trainer - São Paulo
                        </li>
                        <li>
                            Pós Graduação - Nutrição Esportiva - Gama Filho - São Paulo
                        </li>
                        <img className={styles.tamanho}  src="/results/victor.jpg" alt="logo_ignews" />
                    </ul>

                </span>

            </div>
           
        </main>




    )
}
