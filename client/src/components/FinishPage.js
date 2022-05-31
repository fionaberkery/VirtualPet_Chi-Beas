import React from "react";


const FinishPage = ({finalScore, name}) => {

    return (

        <>
            <h1 id="header"> {name} is dead </h1>
            <h3 id="header">Final Score : {finalScore} </h3>
        </>
    )
}

export default FinishPage