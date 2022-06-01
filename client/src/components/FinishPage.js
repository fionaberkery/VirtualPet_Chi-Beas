import React from "react";
import HighScoresList from "./HighScoresList";
import { postMonster } from '../services/GameServices'
import saveButton from '../images/save.png'
import gameOver from '../images/gameover.png'

const FinishPage = ({finalScore, name, deleteMonster, addMonster, monsters}) => {

    const handleSaveButton = () => {
        const newMonster = {name, finalScore}
        postMonster(newMonster).then((data) => {
            addMonster(data.ops[0])
            })
        }

    return (

        <>            
            <img src={gameOver} width="500" height="50"/>
            <h1 id="finish-page-text"> {name} is dead </h1>
            <h3>Final Score : {finalScore} </h3>            
            <button onClick={handleSaveButton} className='game-button' > <img src={saveButton} width="100" height='40' /> </button>
            <HighScoresList deleteMonster={deleteMonster} monsters={monsters} />
            <h1>Credits</h1>
                <ul>
                    <il>
                        <h5>FIO (fionaberkery)</h5>
                        <a href='https://github.com/fionaberkery'>view gitHub</a>
                    </il>
                    <il>
                        <h5>SAN (sandramolina)- </h5>
                        <a href='https://github.com/sandramolina'>view gitHub</a>
                    </il>
                    <il>
                        <h5>AND (andrewredman91)</h5>
                        <a href='https://github.com/andrewredman91'>view gitHub</a>
                    </il>
                    <li>
                        <h5>AAR (aaronhubber)</h5>
                        <a href='https://github.com/aaronhubber'> view gitHub</a>
                    </li>
                </ul>
        </>
    )
}

export default FinishPage