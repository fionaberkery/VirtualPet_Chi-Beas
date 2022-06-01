import React from 'react'
import ScoreItem from './ScoreItem.js'

const HighScoresList = ({monsters, deleteMonster}) => {

    const theScoresList = monsters.map((monster, index) => {
        return <ScoreItem key={index} monster={monster} deleteMonster={deleteMonster} />
    })

    return (
            <>
                <div className="finish-page-text">
                {theScoresList}
                </div>
            </>
    )
}

export default HighScoresList