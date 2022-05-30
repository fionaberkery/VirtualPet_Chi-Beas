import React, {useEffect, useState, useRef} from 'react'

const Score = ({ tempFinalScore, timeRef, onEnd}) => {

    const [runningScore, setRunningScore] = useState(0)
    const [count, setCount] = useState(1)

    useEffect(() => {    
        setCount(count + 1)
        console.log(count, "count") 
        setRunningScore(Math.floor(count / 2))
        console.log(count, "count2")
        if (onEnd) {
        tempFinalScore(runningScore) 
    }}, [timeRef.current, onEnd])
    
    return (
    
            <div> Running score : {runningScore} </div>
    
            )
    }

export default Score