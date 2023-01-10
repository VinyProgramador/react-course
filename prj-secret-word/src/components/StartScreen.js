import React from 'react'
import './StartScreen.css'

const StartScreen = ( {startGame} ) => {
  return (
    <div className='start'>
        <h1>Palavra Secreta</h1>
        <p>Clique no Botão para jogar!</p>
        <button onClick={startGame}>Começar Jogo</button>
    </div>
  )
}

export default StartScreen