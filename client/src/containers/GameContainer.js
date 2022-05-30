import '../App.css';
import React, {useState, useEffect, useRef} from 'react';
import Score from '../components/Score';
import Timer from '../components/Timer';
import FinishPage from '../components/FinishPage';
import Egg from '../components/Monster';
import { Idle } from '../components/Monster';
import { Grave } from '../components/Monster';

const TIME_LIMIT = 15000;

const  Game = (()=> {
  
  const [playing, setPlaying] = useState(false)
  const [finished, setFinished] = useState(false)
  
  const [finalScore, setFinalScore] = useState(0)

  const second = 1000
  const [internalTime, setInternalTime] = useState(TIME_LIMIT)
  const [timeRate, setTimeRate] = useState (second)

  const healthBarRef = useRef(TIME_LIMIT)  
  const timeRef = useRef(TIME_LIMIT)
  
  const endGame = (()=>{
    setPlaying (false)
    setFinished(true)   
})

const startGame = (()=>{
    setPlaying (true)
    setFinished(false)
})

const handleClick = (event) => {
  event.preventDefault()
  let newTime = internalTime 
  setInternalTime(newTime += 10000)
  console.log(healthBarRef.current, "hb")
  console.log(internalTime, "Internal")
}

const changeInternalTime = (timeSum) => {
  setInternalTime(timeSum)
}

const tempFinalScore = (score) => {
  setFinalScore(score)
}



  return (
    <>
    {!playing && !finished &&
      <>
        <h1>Start Game</h1> 
        <button onClick={startGame}>Start the Game!</button>
        <Egg id="canvas"></Egg>
      </>}
    
    {playing && !finished &&
      <>
        <h1>Playing Game</h1> 
        <button onClick={endGame} > End Game </button>
        <Timer 
          time={TIME_LIMIT} 
          onEnd={endGame} 
          internalTime={internalTime} 
          timeRate={timeRate} 
          changeInternalTime={changeInternalTime} 
          healthBarRef ={healthBarRef} 
          timeRef={timeRef}
          />
        <Score 
          tempFinalScore={tempFinalScore}   
          onEnd={endGame} 
          timeRef={timeRef} />
        <br></br>
        <Idle id="canvas"></Idle>
        <button onClick={handleClick}>Feed</button>

      </>}
    

      {!playing && finished &&
        
      <>
      {console.log("fire")}
        <FinishPage finalScore={finalScore}/> 
        <Grave id="canvas"></Grave>
      </>}
    </>
  )
})

export default Game;