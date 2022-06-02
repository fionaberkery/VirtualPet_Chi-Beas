import React from 'react'
import ScoreItem from './ScoreItem.js'

const HighScoresList = ({monsters, deleteMonster}) => {

    const theScoresList = monsters.map((monster, index) => {
        return <ScoreItem key={index} monster={monster} deleteMonster={deleteMonster} />
    })

    return (
            <>
                <div className="finish-page-text">
                <h1 id="blink" > high scores </h1>
                <hr></hr>
                {theScoresList}
                </div>
            </>
    )
}

export default HighScoresList