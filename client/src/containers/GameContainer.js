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
  const [runningScore, setRunningScore] = useState(0)
  const [finalScore, setFinalScore] = useState(0)

  const endGame = (()=>{
    setPlaying (false)
    setFinished(true)   
    setFinalScore(finalScore)
})

const startGame = (()=>{
    setPlaying (true)
    setFinished(false)
})

const tempFinalScore = ((score) => {
  setFinalScore(score)
})

console.log(finalScore)

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
        <Timer time={TIME_LIMIT} onEnd={endGame}/>
        <Score tempFinalScore={tempFinalScore} setFinalScore={setFinalScore} runningScore={runningScore} setRunningScore={setRunningScore} />
        <br></br>
        <Idle id="canvas"></Idle>
      </>}
    

      {!playing && finished &&
      <>
        
        <FinishPage finalScore={finalScore}/> 
        <Grave id="canvas"></Grave>
      </>}
    </>
  )
})

export default Game;
