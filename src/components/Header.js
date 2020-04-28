import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/masks/00-circle.png'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>Olá, sou a Joana</strong>, e queria <br />
        mostrar aqui as máscaras que tenho <br />
        andado a fazer durante o castigo.
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
