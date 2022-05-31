import React, {useEffect } from 'react'



const Timer = ({onEnd, internalTime, timeRate, changeInternalTime, timeRef,  healthBarRef}) => {


    const healthBar = document.querySelector(".healthbar-inner")
    let healthBarWidth = healthBarRef.current

    useEffect(() => {
        healthBarRef.current = setInterval( () => 
        changeInternalTime((timeRef.current -= timeRate)),
        // healthBar.style.width = healthBarWidth + "%",
            timeRate
        )
        return () => {
        clearInterval(healthBarRef.current)
        // healthBar.style.width = "0%"
        }
    }, [timeRate])

    
    return (
    <>
    <h3>Boo!</h3>
    <div>{`Time: ${internalTime / 1000}s`}</div>
    <div className='healthbar'>
        <div className='healthbar-inner'></div>
    </div>
    </>
    )
    }


export default Timer  