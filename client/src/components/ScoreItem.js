import React from 'react'

const ScoreItem = ({monster, deleteMonster}) => {
    return (
            <>
                <p> Monster : {monster.name} </p>
                <p> Score : {monster.finalScore} </p>  
                <button onClick={()=>deleteMonster(monster._id)}> 🗑 </button>
            </>
    )
}

export default ScoreItem









