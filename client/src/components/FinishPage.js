import React from "react";
import HighScoresList from "./HighScoresList";
import { postMonster } from '../services/GameServices'
import saveButton from '../images/save.png'
import gameOver from '../images/gameover.png'

const FinishPage = ({finalScore, name, deleteMonster, addMonster, monsters}) => {

    const handleSaveButton = () => {
        const newMonster = {name, finalScore}
            addMonster(newMonster)
        }

    return (

        <>            
            <img src={gameOver} width="500" height="50"/>
            <h1 id="finish-page-text"> {name} is dead </h1>
            <h3>Final Score : {finalScore} </h3>            
            <button onClick={handleSaveButton} className='game-button' > <img src={saveButton} width="100" height='40' /> </button>
            <HighScoresList deleteMonster={deleteMonster} monsters={monsters} />
        </>
    )
}

export default FinishPage