import React from 'react'
import Head from 'next/head'
import GlobalStyle from '@/src/GlobalStyles'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Anunx</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </Head>
    <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
  
  
}
