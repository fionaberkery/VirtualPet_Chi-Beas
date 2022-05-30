import React, {useEffect } from 'react'

const Timer = ({onEnd, internalTime, timeRate, changeInternalTime, timeRef,  healthBarRef}) => {

    useEffect(() => {
        if (internalTime <= 0) {
        onEnd()
        }
    }, [internalTime])

    useEffect(() => {
        healthBarRef.current = setInterval( () => 
        changeInternalTime((timeRef.current -= timeRate)),
            timeRate
        )
        return () => {
        clearInterval(healthBarRef.current)
        }
    }, [timeRate])

    
    return <div>{`Time: ${internalTime / 1000}s`}</div>
    }


export default Timer  