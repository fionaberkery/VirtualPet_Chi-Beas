import React from 'react'
import ScoreItem from './ScoreItem.js'

const HighScoresList = ({monsters, deleteMonster}) => {

    const theScoresList = monsters.map((monster, index) => {
        return <ScoreItem key={index} monster={monster} deleteMonster={deleteMonster} />
    })

    return (
            <>
                <h2>High Scores</h2>
                {theScoresList}
            </>
    )
}

export default HighScoresList