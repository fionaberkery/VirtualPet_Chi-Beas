import React, { useState } from "react";


const HealthBar = ({internalTime})=>{
    const [style, setStyle] = useState ({})
    
    let itPercentage = (internalTime/15000) * 100

    setTimeout(()=>{
        const newStyle = {
            opacity:1,
            width: `${itPercentage}%`
        }
        setStyle(newStyle)
    }, 200)

    return(
        <>
        <div className='healthbar'>
            <div className='healthbar-inner' style={style} ></div>
        </div>
        </>
    )

}

export default HealthBar;