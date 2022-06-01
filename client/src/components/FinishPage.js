import React from "react";
import HighScoresList from "./HighScoresList";
import Credits from "./Credits";
import { Grave } from "./Monster";
import { postMonster } from '../services/GameServices'
import playAgainButton from '../images/playagain.png';
import saveButton from '../images/save.png'
import gameOver from '../images/gameover.png'
import '../FinishPage.css';

const FinishPage = ({finalScore, name, deleteMonster, addMonster, monsters, reStartGame}) => {

    const handleSaveButton = () => {
        const newMonster = {name, finalScore}
        postMonster(newMonster).then((data) => {
            addMonster(data.ops[0])
            })
        }

    return (

        <> 
        <div id="flex-container">           
          <div id="top">  
            <img id="game-over" src={gameOver} width="600" height="60"/>

            <section id="f-p-details">
                <p className="finish-page-text"> {name} is dead, Final Score : {finalScore} </p>
                <button onClick={handleSaveButton} className='game-button' > <img src={saveButton} width="60" height='25' /> </button>               
                
            </section>
</div>
            <button id="play-again-button" onClick={reStartGame}> <img src={playAgainButton} width="160" height="40" /></button>      
            
            <div id="finish-page-container">
            <div id="high-scores-list">
                <HighScoresList  deleteMonster={deleteMonster} monsters={monsters} />
                </div>
                <div id="credits">
                <Credits  />
                <Grave id="grave"></Grave>
                </div>
            </div>

        </div>
        </>
    )
}

export default FinishPage