import React from 'react'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Sobre Nós</NavLink>
        <NavLink to="/products">Produtos</NavLink>
    </nav>
  )
}

export default NavBar