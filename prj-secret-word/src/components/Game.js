import React from 'react';
import './Game.css';

const Game = ({ verifyLetter }) => {
    return (
        <div>
            <h1>Game</h1>
            <button onClick={verifyLetter}>Finalizar game</button>
        </div>
    )
}

export default Game