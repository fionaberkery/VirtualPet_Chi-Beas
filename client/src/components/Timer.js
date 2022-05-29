import React, {useEffect, useRef, useState } from 'react'

const Timer = ({ time, onEnd }) => {
    
    const second = 1000
    const [internalTime, setInternalTime] = useState(time)
    const [timeRate, setTimeRate] = useState (second)
    const [sad, setSad] = useState(false)
    
    const healthBarRef = useRef(time)  
    const timeRef = useRef(time)

    useEffect(() => {
        if (internalTime === 0 && onEnd) {
        onEnd()
        }
    }, [internalTime, onEnd])

    useEffect(() => {
        healthBarRef.current = setInterval(
        () => setInternalTime((timeRef.current -= timeRate)),
        timeRate
        )
        return () => {
        clearInterval(healthBarRef.current)
        }
    }, [timeRate])
    
    
    return <div>{`Time: ${internalTime / 1000}s`}</div>
    }


export default Timer  