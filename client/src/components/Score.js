import React, {useEffect, useState} from 'react'

const Score = ({ tempFinalScore, onEnd, internalTime}) => {

    const [runningScore, setRunningScore] = useState(0)
    const [count, setCount] = useState(1)

    useEffect(() => {    
        setCount(count + 1)
        setRunningScore(Math.floor(count / 2))
        if (onEnd) {
        tempFinalScore(runningScore) 
    }}, [internalTime, onEnd])
    
    return (
            <div> Running score : {runningScore} </div>
            )
    }

export default Score