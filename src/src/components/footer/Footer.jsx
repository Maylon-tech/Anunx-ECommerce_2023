import React from 'react'
import { Container, GridContainer, GridItems, ItemContent } from './index'
import Link from 'next/link'

const Footer = () => {
  return (
    <Container>
      <GridContainer>

        <GridItems>
          <Link href="#" passHref>
            <ItemContent>Ajuda e Contato</ItemContent>
          </Link>
        </GridItems>

        <GridItems>
          <Link href="#" passHref>
            <ItemContent>Dicas e Seguranca</ItemContent>
          </Link>
        </GridItems>

        <GridItems>
          <Link href="#" passHref>
            <ItemContent>Anunciar e Vender</ItemContent>
          </Link>
        </GridItems>

        <GridItems>
          <Link href="#" passHref>
            <ItemContent>Plano Profissional</ItemContent>
          </Link>
        </GridItems>

      </GridContainer>
    </Container>
  )
}

export default Footer