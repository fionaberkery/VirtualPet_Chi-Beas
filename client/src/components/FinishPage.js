import React from "react";
import HighScoresList from "./HighScoresList";
import Credits from "./Credits";
import { postMonster } from '../services/GameServices'
import saveButton from '../images/save.png'
import gameOver from '../images/gameover.png'
import '../FinishPage.css';

const FinishPage = ({finalScore, name, deleteMonster, addMonster, monsters}) => {

    const handleSaveButton = () => {
        const newMonster = {name, finalScore}
        postMonster(newMonster).then((data) => {
            addMonster(data.ops[0])
            })
        }

    return (

        <> 
        <div id="flex-container">           
            <div id="f-p-top-info">
            <img id="game-over" src={gameOver} width="400" height="40"/>

            <section id="f-p-details">
                <p className="finish-page-text" id="is-dead"> {name} is dead, Final Score : {finalScore} </p>            
                <button onClick={handleSaveButton} className='game-button' id="save-button"> <img src={saveButton} width="60" height='25' /> </button>
                
            </section>
            </div>
            
            <div id="finish-page-container">
            <div id="high-scores-list">
                <HighScoresList  deleteMonster={deleteMonster} monsters={monsters} />
                </div>
                <div id="credits">
                <Credits  />
                </div>
            </div>

        </div>
        </>
    )
}

export default FinishPage