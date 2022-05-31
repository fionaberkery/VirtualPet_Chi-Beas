import React from 'react'
import deleteButton from '../images/delete.png'

const ScoreItem = ({monster, deleteMonster}) => {
    return (
            <>
                <p> Monster : {monster.name} </p>
                <p> Score : {monster.finalScore} </p>  
                <button className="game-button" onClick={()=>deleteMonster(monster._id)}> <img src={deleteButton} width="50" /> </button>
            </>
    )
}

export default ScoreItem









