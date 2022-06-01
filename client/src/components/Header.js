import React from 'react'
import Timer from './Timer'
import HealthBar from './Healthbar'
import Score from './Score'

const Header = ({endGame, internalTime, timeRate, changeInternalTime, tempFinalScore, playing, name }) => {
    return (
    <>
        {
            playing ? 
            <div className="head-container">
                <br></br>
                <p id="cb-name"> CB: {name} </p>
                <p id="health-tag"> ⬇ Health ⬇</p>                
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