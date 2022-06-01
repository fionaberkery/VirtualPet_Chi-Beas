import React from 'react'
import Timer from './Timer'
import HealthBar from './Healthbar'
import Score from './Score'
import endGameButton from '../images/endgame.png'

const Header = ({endGame, internalTime, timeRate, changeInternalTime, tempFinalScore, playing, name }) => {
    return (
    <>
        {
            playing ? 
            <div className="head-container">
                <p id="cb-name"> {name} </p>
                <button onClick={endGame} className='game-button'> <img src={endGameButton} width="150"/> </button>
                <p> {`Time: ${internalTime / 1000}s`} </p>
                <Timer  
                    timeRate={timeRate} 
                    changeInternalTime={changeInternalTime} 
                />
                <HealthBar internalTime={internalTime}/>
                <Score 
                    tempFinalScore={tempFinalScore}   
                    onEnd={endGame} 
                    internalTime={internalTime}
                />
            </div>
            : ''
        }

    </>
    )
}

export default Header