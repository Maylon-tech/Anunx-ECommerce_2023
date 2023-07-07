import React from 'react'
import Header from '../components/header/Header'

const Default = ({ children }) => {
  return (
    <>
        <Header />
        { children }
        <footer>FOOTER</footer>
    </>
  )
}

export default Default