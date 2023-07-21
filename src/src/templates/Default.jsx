import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import GlobalStyle, { ContainerMain } from '../GlobalStyles'

const Default = ({ children }) => {
  return (
    <>
        <GlobalStyle />
        <Header />
        <ContainerMain>
          { children }
        </ContainerMain>
        <Footer />
    </>
  )
}

export default Default