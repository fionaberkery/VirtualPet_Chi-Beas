import React from 'react'
import deleteButton from '../images/delete.png'

const ScoreItem = ({monster, deleteMonster}) => {
    return (
            <>
            
            <div id="scores">
            
                <p id="monster-name"> Monster : {monster.name} </p>
                <p id="monster-score" > Score : {monster.finalScore} </p>  
                <button className="game-button" onClick={()=>deleteMonster(monster._id)}> <img src={deleteButton} width="50" /> </button>
                <hr width="200"></hr>
                </div>
            </>
    )
}

export default ScoreItem









