import Head from 'next/head'
import styles from './styles.module.scss'


export default function Results() {
   return (

      <>
         <Head>
           <title> Resultados | VR </title>
         </Head>

         <main className={styles.contentmain} >
               <h1 className={styles.h1}> RESULTADOS DE SUCESSO</h1>
               <h2 className={styles.h2}> INSPIRAÇÃO, SUPERAÇÃO E MUITA DISCIPLINA, CONFIRA A EVOLUÇÃO DE ALGUNS ALUNOS: </h2>

            <div className={styles.contentdiv}>

               <ul>
                  <li className={styles.firstresult}>
                  <img  className={styles.tamanho} src="/results/resultado1.jpg" alt="logo_ignews" />
                    
                     
                     </li>
                  <li className={styles.secondresult}>
                  <img className={styles.tamanho} src="/results/resultado2.jpg" alt="logo_ignews" />
                     
                     </li>

                  <li className={styles.thirdresult}>
                  <img className={styles.tamanho} src="/results/resultado3.jpg" alt="logo_ignews" />
                    
                     </li>
                     <li className={styles.fortyresult}>
                  <img className={styles.tamanho} src="/results/resultado4.jpg" alt="logo_ignews" />
                    
                     </li>
                     <li className={styles.fiftyresult}>
                  <img className={styles.tamanho} src="/results/resultado5.jpg" alt="logo_ignews" />
                    
                     </li>
                     <li className={styles.sixtyresult}>
                  <img className={styles.tamanho} src="/results/resultado5.jpg" alt="logo_ignews" />
                     
                     </li>
               </ul>
            </div>
         </main>

      </>
   )
}
