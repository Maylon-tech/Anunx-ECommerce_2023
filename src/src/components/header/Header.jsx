import Link from 'next/link'
import React from 'react'
import { Nav } from './index'

const Header = () => {
  return (
    <Nav>
        <div>Menu Burguer</div>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
        </ul>
    </Nav>
  ) 
}

export default Header