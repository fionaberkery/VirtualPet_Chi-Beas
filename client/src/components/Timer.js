import React, {useEffect } from 'react'

const Timer = ({onEnd, internalTime, timeRate, changeInternalTime}) => {
    
    let intervalID = 0  

    useEffect(() => {
        if (internalTime <= 0) {
        onEnd()
        }
    }, [internalTime])

    useEffect(() => {
        intervalID = setInterval( () => 
        changeInternalTime(),
            timeRate
    )
        return () => {
        clearInterval(intervalID)
        }
    }, [timeRate])

    
    return <div>{`Time: ${internalTime / 1000}s`}</div>
    }


export default Timer  