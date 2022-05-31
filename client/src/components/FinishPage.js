import React from "react";
import HighScoresList from "./HighScoresList";
import { postMonster } from '../services/GameServices'

const FinishPage = ({finalScore, name, deleteMonster, addMonster, monsters}) => {

    const handleSaveButton = () => {
        const newMonster = {name, finalScore}
            addMonster(newMonster)
        }



    return (

        <>
            
            <h1> {name} is dead </h1>
            <h3>Final Score : {finalScore} </h3>
            
            <button onClick={handleSaveButton} > Save score </button>

            <HighScoresList deleteMonster={deleteMonster} monsters={monsters} ></HighScoresList>
        </>
    )
}

export default FinishPage