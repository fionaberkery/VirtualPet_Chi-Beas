import '../App.css';
import React, {useState, useEffect} from 'react';
import { getMonsters, postMonsters, deleteMonster as apiDeleteMonster } from '../services/GameServices';

import Header from '../components/Header';
import FinishPage from '../components/FinishPage';
import Egg from '../components/Monster';
import startButton from '../images/start_button.png'
import { Idle } from '../components/Monster';
import { Sick } from '../components/Monster';
import { Grave } from '../components/Monster';
import { Play } from '../components/Monster';
import { Eating } from '../components/Monster';
import { Poop } from '../components/Monster';
import Background from '../components/Background';

const gameTime = 15000;
const oneSecond = 1000

const  Game = ()=> {
  
  const [playing, setPlaying] = useState(false)
  const [finished, setFinished] = useState(false)
  const [finalScore, setFinalScore] = useState(0)
  const [internalTime, setInternalTime] = useState(gameTime)
  const [timeRate, setTimeRate] = useState (oneSecond)
  const [name, setName] = useState("")
  const [monsters, setMonsters] = useState ([])

  const [feed, setFeed] = useState(false)
  const [poop, setPoop] = useState(false)
  const [idle, setIdle] = useState(true)
  const [play, setPlay] = useState(false)
  const [sick, setSick] = useState(false)

  useEffect(() => {
    if (internalTime <= 0) {
    endGame()
    }
}, [internalTime])

  useEffect(() => {
    if (endGame) {
      getMonsters().then((allMonsters) => {
        setMonsters(allMonsters)
      })
    }
  }, [])  
  
  const idleState = () => {
    setIdle(true)
    setFeed(false)
    setPoop(false)
    setPlay(false)
    setSick(false)
  } 

const startGame = (()=>{
    idleState()
    setPlaying (true)
    setFinished(false)
    setInternalTime(gameTime)
})

const endGame = (()=>{
  setPlaying (false)
  setFinished(true)   
})

const addMonster = (monster) => {
  setMonsters([...monsters, monster])
}

const deleteMonster = (id) => {
  apiDeleteMonster(id).then(()=>{
    let temp = monsters.map(g=>g)
    const toDel = monsters.map(g =>g._id).indexOf(id)
    temp.splice(toDel, 1)
    setMonsters(temp)
  })}

const handleFeedClick = () => {
  setInternalTime((currentInternalTime) => currentInternalTime + 10000)
  setIdle(false)
  setPoop(false)
  setPlay(false)
  setSick(false)
  setFeed(true)
}
const handleIdleClick = () => {
  setFeed(false)
  setPoop(false)
  setPlay(false)
  setSick(false)
  setIdle(true)  
}

const handlePlayClick = () => {
  setInternalTime((currentInternalTime) => currentInternalTime + 8000)
  setIdle(false)
  setFeed(false)
  setPoop(false)
  setSick(false)
  setPlay(true)
}

const handlePoopClick = () => {
  setInternalTime((currentInternalTime) => currentInternalTime - 5000)
  setIdle(false)
  setFeed(false)
  setPlay(false)
  setSick(false)
  setPoop(true)
}

const handleSickClick = () => {
  setInternalTime((currentInternalTime) => currentInternalTime - 10000)
  setIdle(false)
  setFeed(false)
  setPoop(false)
  setPlay(false)
  setSick(true)
}

const handlersArray = [handleFeedClick, handlePlayClick, handlePoopClick, handleSickClick]

const handleRandomEvent = () => {
  const randomIndex = (n) => {
    return Math.floor( Math.random() * n ); 
  }
  const index = randomIndex(handlersArray.length)
  handlersArray[index]();
}

const changeInternalTime = () => {
  setInternalTime((currentInternalTime) => currentInternalTime - timeRate)
}

const tempFinalScore = (score) => {
  setFinalScore(score)
}

const handleNameInput = (event) => {
  setName(event.target.value)
}

  return (
    <>
    <div id="all-game">
    <Header endGame={endGame} internalTime={internalTime} timeRate={timeRate} changeInternalTime={changeInternalTime} tempFinalScore={tempFinalScore} playing={playing} name={name}/>
    <Background/>

    {!playing && !finished &&
      <>
        <h1 id="header">Start Game</h1> 
        <label  htmlFor='name-input'> Enter Your CB name here </label><br></br>
        <input onChange={handleNameInput} name="name-input" type="text" value={name} maxLength="3" className="input-name"></input>
        <br></br>
        <button id="start-button" onClick={startGame}> <img id="start-button-image" src={startButton} width="100"/> </button>
        <Egg id="canvas"></Egg>
      </>}
    
    {playing && idle &&
      <>
        <h1 id="header">Home Sweet Home</h1> 
        <Idle id="canvas"></Idle>
        <button onClick={handleIdleClick}>Home</button>
        <button onClick={handleRandomEvent}>Surprise Me</button>        
      </>}
    
      {playing && feed &&
      <>
        <h1 id="header">Yum Yum!</h1> 
        <Eating id="canvas"></Eating>
        <button onClick={handleIdleClick}>Home</button>
        <button onClick={handleRandomEvent}>Surprise Me</button>         
      </>}

      {playing && poop &&
      <>
        <h1 id="header">Opsie poopsie</h1>
        <Poop id="canvas"></Poop>
        <button onClick={handleIdleClick}>Home</button>
        <button onClick={handleRandomEvent}>Surprise Me </button>        
      </>}

      {playing && sick &&
      <>
        <h1 id="header">I'm feeling peely wally</h1> 
        <Sick id="canvas"></Sick>
        <button onClick={handleIdleClick}>Home</button>
        <button onClick={handleRandomEvent}>Surprise Me</button>         
      </>}

      {playing && play &&
      <>
        <h1 id="header">Playing w ma balls</h1>
        <Play id="canvas"></Play>
        <button onClick={handleIdleClick}>Home</button>
        <button onClick={handleRandomEvent}>Surprise Me</button>         
      </>}

      {!playing && finished &&
        
      <>
        <FinishPage monsters={monsters} finalScore={finalScore} name={name} addMonster={addMonster} deleteMonster={deleteMonster}></FinishPage> 
        <Grave id="canvas"></Grave>
        <button id="start-button" onClick={startGame}> Play Again </button>
      </>}
      </div>
    </>

  )}
      
      


export default Game;