import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <nav className='header-box'>
      <NavLink to="/" end className='button-navlink'>
        Produto
      </NavLink>
      <NavLink to="contato" className='button-navlink'>
        Contato
      </NavLink>
    </nav>
  )
}

export default Header