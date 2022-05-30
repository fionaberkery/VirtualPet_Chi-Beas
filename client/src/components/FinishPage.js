import React from "react";
import gameOver from '../images/game_over.png'

const FinishPage = ({finalScore, name}) => {

    return (

        <>
            <img id="game-over-image" src={gameOver} width="250" height="250"/>
            
            <h1 id="header"> {name} is dead </h1>
            <h3 id="header">Final Score : {finalScore} </h3>
        </>
    )
}

export default FinishPage