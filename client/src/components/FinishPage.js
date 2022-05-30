import React from "react";

const FinishPage = ({finalScore, name}) => {

    return (

        <>
            <h1> {name} is dead </h1>
            <h3>Final Score : {finalScore} </h3>
        </>
    )
}

export default FinishPage