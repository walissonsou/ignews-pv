import { AppProps } from 'next/app'
import React from 'react'
import { SessionProvider as NextSessionProvider } from "next-auth/react"
import { Header } from '../components/Header'



import '../styles/global.scss'

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


