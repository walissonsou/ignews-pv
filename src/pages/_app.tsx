import { AppProps } from 'next/app'
import React from 'react'
import { SessionProvider as NextSessionProvider } from "next-auth/react"
import { Header } from '../components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';



import '../styles/global.scss'
import CarouselContainer from '../components/Caroulsel/CarouselContainer';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <NextSessionProvider session={pageProps.session}>
      <Header />
      
      <Component {...pageProps} />
      </NextSessionProvider>
    
  )
}


