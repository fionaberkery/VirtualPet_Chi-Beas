import {useEffect } from 'react'

const Timer = ({timeRate, changeInternalTime}) => {
    
    let intervalID = 0  

    useEffect(() => {
        intervalID = setInterval( () => 
        changeInternalTime(),
            timeRate)
        return () => {
        clearInterval(intervalID)}
    }, [timeRate])}


export default Timer  