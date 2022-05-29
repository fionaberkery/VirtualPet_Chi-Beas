import '../App.css';
import React, {useState, useEffect, useRef} from 'react';
import Header from '../components/Header.js'
import Timer from '../components/Timer';

const TIME_LIMIT = 30000;


const  Game = (()=> {
  const [playing, setPlaying] = useState(false)
  const [finished, setFinished] = useState(false)

  const endGame = (()=>{
    setPlaying (false)
    setFinished(true)
})

const startGame = (()=>{
    setPlaying (true)
    setFinished(false)
})


  return (
    <>
    {!playing && !finished &&
      <>
        <h1>Start Game</h1> 
        <button onClick={startGame}>Start the Game!</button>
      </>}
    {playing && !finished &&
      <>
        <h1>Playing Game</h1> 
        <Timer time={TIME_LIMIT} onEnd={endGame}/>
      </>}

      {!playing && finished &&
      <>
        <h1>Finished Game</h1> 
      </>}
    </>
  )
})

export default Game;
