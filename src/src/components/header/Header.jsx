import Link from 'next/link'
import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg'

import { 
  Avatar,
  AvatarPerson,
  ButtonAction,
  Container, 
  DividerLine, 
  IconButton, 
  LeftHeader, 
  Logo, 
  MenuDrop, 
  MenuItem, 
  Nav,
  RightHeader, 
} from './index'

const Header = () => {
  const [menuDrop, setMenuDrop] = useState(false)


  return (
    <Container>
      <Nav>
        <LeftHeader>
          <Logo>
            <Link href="/">
              Logo
            </Link>          
          </Logo>
        </LeftHeader>

        <RightHeader>
          <Link href="/">
            <ButtonAction>
              Anunciar e Vender
            </ButtonAction>
          </Link>

          <IconButton>
            {
              true === false
              ? <Avatar src="" alt="profile" />
              : <CgProfile />
            }            
            <AvatarPerson>Nemoto Mailon</AvatarPerson>
          </IconButton>

        </RightHeader>

        <MenuDrop>
            <MenuItem>Meus Anuncios</MenuItem>
            <MenuItem>Publicar novo anuncio</MenuItem>
            <DividerLine />
            <MenuItem>Sair</MenuItem>
        </MenuDrop>
      </Nav>
    </Container>
  ) 
}

export default Header