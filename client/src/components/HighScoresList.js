import React from 'react'
import ScoreItem from './ScoreItem.js'

const HighScoresList = ({monsters, deleteMonster}) => {

    const theScoresList = monsters.map((monster) => {
        return <ScoreItem monster={monster} key={monster._id} deleteMonster={deleteMonster} />
    })

    return (
            <>
                <h2>High Scores</h2>
                {theScoresList}
            </>

    )
}

export default HighScoresList