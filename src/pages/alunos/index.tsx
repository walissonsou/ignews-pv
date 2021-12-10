import styles from './styles.module.scss'
import Head from 'next/head'

export default function Alunos() {
    return (
        <>
            <Head>
                <title> Posts | VR </title>
            </Head>

            <main className={styles.container}>
                <div className={styles.div}>

                    <a href="#">
                        <time> 12 do 12 do 12 </time>
                        <strong>Suplementos – Tomar somente em dias de treino?</strong>
                        <p>Esse questionamento faz muito sentido, afinal, alguns suplementos atuam antes, outros durante e
                            alguns depois do treino.</p>
                    </a>
                    <a href="#">
                        <time> 12 do 12 do 12 </time>
                        <strong>Suplementos – Tomar somente em dias de treino?</strong>
                        <p>Esse questionamento faz muito sentido, afinal, alguns suplementos atuam antes, outros durante e
                            alguns depois do treino.</p>
                    </a>
                    <a href="#">
                        <time> 12 do 12 do 12 </time>
                        <strong>Suplementos – Tomar somente em dias de treino?</strong>
                        <p>Esse questionamento faz muito sentido, afinal, alguns suplementos atuam antes, outros durante e
                            alguns depois do treino.</p>
                    </a>
                </div>
            </main>

        </>


    )
}