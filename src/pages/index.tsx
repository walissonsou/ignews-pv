import Head from 'next/Head'



import { SubscribeButton } from '../components/SingInButton/Subscripet'

import { GetStaticProps } from 'next';
import styles from './home.module.scss'
import { stripe } from '../services/stripe';

interface productProps {
  product: {
    priceId: string,
    amount: number;
  }
}

export default function Home({ product }:productProps) {
  return (
  <>
  <Head>
    <title> Início | VR </title>
  </Head>
<main className={ styles.contentContainer}>
  <section className={ styles.hero}>
    <span> Ei, seja bem vindo!  </span>
    <h1>A melhor metodologia de exercício que <br/ > <span> você</span> tem direito.</h1>
    <p>
      Matricule-se e tenha acesso ao melhor  <br /> acompanhamento do <span>Brasil </span>
     por {product.amount}
    </p>
    <SubscribeButton priceId={product.priceId}/>
  </section>
  <img src ="/images/logovictor.png" alt="Girl coding" />
  
</main>

  </>
  )
}

export const getStaticProps : GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1K2m2XEf9hol8EYYVpeOgV1r', {
 
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR',{
      style:'currency',
      currency: 'BRL',
    }).format(price.unit_amount / 100), //vem em centavos.
  };

  return {
    props: {
      product,
    },
    revalidate: 60*60*24, // revalidação a cada 24horas.
  } 
}