import React, {useEffect, useState, useRef} from 'react'

const Score = ({runningScore, setRunningScore, finalScore, setFinalScore}) => {

    const second = 1000
    const [scoreRate, setScoreRate] = useState(second)

    const scoreRef = useRef(runningScore)

    useEffect(() => {
        scoreRef.current = setInterval(() => {
            setRunningScore((scoreRef.current += scoreRate))
        }, scoreRate)
        return () => {
            clearInterval(scoreRef.current)
        }
    }, [scoreRate])

    let score = Math.floor((scoreRef.current / 1000) * 5)
    setFinalScore(score)
    
    return (
    
            <div> Running score : {score} </div>
    
            )
    }

export default Score