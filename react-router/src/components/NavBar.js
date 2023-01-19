import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre Nós</Link>
    </nav>
  )
}

export default NavBar