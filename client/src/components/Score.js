import React, {useEffect, useState, useRef} from 'react'

const Score = ({ tempFinalScore, internalTime, onEnd}) => {

    const [runningScore, setRunningScore] = useState(0)

    useEffect(() => {
        setRunningScore((Math.floor(5000 / internalTime) * 5))
        console.log(internalTime)
        if (onEnd) {
        tempFinalScore(runningScore) 
    }}, [internalTime, onEnd])
    
    return (
    
            <div> Running score : {runningScore} </div>
    
            )
    }

export default Score