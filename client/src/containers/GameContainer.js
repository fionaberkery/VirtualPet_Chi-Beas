import '../App.css';
import React, {useState, useEffect} from 'react';
import { getMonsters, postMonsters, deleteMonster as apiDeleteMonster } from '../services/GameServices';
import { Snoozin } from '../components/Monster';
import Header from '../components/Header';
import FinishPage from '../components/FinishPage';
import Egg from '../components/Monster';
import startButton from '../images/start.png';
import playAgainButton from '../images/playagain.png';
import homeButton from '../images/home.png';
import surpriseMeButton from '../images/surprise.png';
import { Idle } from '../components/Monster';
import { Sick } from '../components/Monster';
import { Grave } from '../components/Monster';
import { Play } from '../components/Monster';
import { Eating } from '../components/Monster';
import { Poop } from '../components/Monster';
import { Crush } from '../components/Monster';
import Background from '../components/Background';
const gameTime = 300000;
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
  const [crush, setCrush] = useState(false)
  const [snoozin, setSnoozin] = useState(false)

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
    setCrush(false)
    setSnoozin(false)
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
  setCrush(false)
  setSnoozin(false)
  setFeed(true)
}
const handleIdleClick = () => {
  setFeed(false)
  setPoop(false)
  setPlay(false)
  setSick(false)
  setCrush(false)
  setSnoozin(false)
  setIdle(true)  
}

const handlePlayClick = () => {
  setInternalTime((currentInternalTime) => currentInternalTime + 8000)
  setIdle(false)
  setFeed(false)
  setPoop(false)
  setSick(false)
  setCrush(false)
  setSnoozin(false)
  setPlay(true)
}

const handlePoopClick = () => {
  setInternalTime((currentInternalTime) => currentInternalTime - 5000)
  setIdle(false)
  setFeed(false)
  setPlay(false)
  setSick(false)
  setCrush(false)
  setSnoozin(false)
  setPoop(true)
}

const handleSickClick = () => {
  setInternalTime((currentInternalTime) => currentInternalTime - 10000)
  setIdle(false)
  setFeed(false)
  setPoop(false)
  setPlay(false)
  setCrush(false)
  setSnoozin(false)
  setSick(true)
}
const handleCrushClick = () => {
  setInternalTime((currentInternalTime) => currentInternalTime - 3000)
  setIdle(false)
  setFeed(false)
  setPoop(false)
  setPlay(false)
  setSick(false)
  setSnoozin(false)
  setCrush(true)
}

const handleSnoozeClick = () => {
  setInternalTime((currentInternalTime) => currentInternalTime - 10000)
  setIdle(false)
  setFeed(false)
  setPoop(false)
  setPlay(false)
  setSick(false)
  setCrush(false)
  setSnoozin(true)
}


const handlersArray = [handleFeedClick, handlePlayClick, handlePoopClick, handleSickClick, handleCrushClick, handleSnoozeClick]

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
    <Header className='health-score' endGame={endGame} internalTime={internalTime} timeRate={timeRate} changeInternalTime={changeInternalTime} tempFinalScore={tempFinalScore} playing={playing} name={name}/>
    <Background/>
    
    {!playing && !finished &&
      <>
        <h1 className="header">Start Game</h1> 
        <label  htmlFor='name-input'> Enter Your CB name here </label><br></br>
        <input onChange={handleNameInput} name="name-input" type="text" value={name} maxLength="3" className="input-name"></input>
        <br></br>
        <div className="egg">
        <button id="start-button" onClick={startGame} className='game-button' > <img src={startButton} width="130"/> </button>
        <Egg className="canvas"></Egg>
        </div>
      </>}
    
    {playing && idle &&
      <>
      <h1 className="header">Home Sweet Home</h1> 
        <div className='animation'>
        
        <button className="game-button" onClick={handleIdleClick}><img src={homeButton} width="120" height="40" /></button>
        <button onClick={handleRandomEvent} className="game-button"><img src={surpriseMeButton} width="200" height="40"/></button>  
        <Idle className="canvas"></Idle>
        </div>
      
      </>}
    
      {playing && feed &&
      <>
        <h1 className="header">Yum Yum!</h1> 
        <div className='animation'>
        <button onClick={handleIdleClick} className="game-button"><img src={homeButton} width="120" height="40" /></button>
        <button onClick={handleRandomEvent} className="game-button"><img src={surpriseMeButton} width="200" height="40" /></button>  
        <Eating className="canvas"></Eating>       
        </div>
      </>}

      {playing && poop &&
      <>

        <h1 className="header">Opsie poopsie</h1>
        <div className='animation'>
        <button onClick={handleIdleClick} className="game-button"><img src={homeButton} width="120" height="40" /></button>
        <button onClick={handleRandomEvent} className="game-button"><img src={surpriseMeButton} width="200" height="40"/></button>    
        <Poop className="canvas"></Poop>    
        </div>
      </>}

      {playing && sick &&
      <>

        <h1 className="header">I'm feeling peely wally</h1> 
        <div className='animation'>
        <button onClick={handleIdleClick} className="game-button"><img src={homeButton} width="120" height="40"/></button>
        <button onClick={handleRandomEvent} className="game-button"><img src={surpriseMeButton} width="200" height="40" /></button>   
        <Sick className="canvas"></Sick>      
        </div>
      </>}

      {playing && play &&
      <>
        <h1 className="header">Playing w ma balls</h1>
        <div className='animation'>
        <button onClick={handleIdleClick} className="game-button"> <img src={homeButton} width="120" height="40"/> </button>
        <button onClick={handleRandomEvent} className="game-button"> <img src={surpriseMeButton} width="200" height="40"/> </button>     
        <Play className="canvas"></Play>    
        </div>
      </>}

      {playing && snoozin &&
      <>
        <h1 className="header">Brb... havin a snooze </h1>
        <div className='animation'>
        <button onClick={handleIdleClick} className="game-button"> <img src={homeButton} width="120" height="40"/> </button>
        <button onClick={handleRandomEvent} className="game-button"> <img src={surpriseMeButton} width="200" height="40"/> </button>      
        <Snoozin className="canvas"></Snoozin>   
        </div>
      </>}

      {playing && crush &&
      <>
        <h1 className="header">Death from Above</h1>
        <div className='animation'>
        <button onClick={handleIdleClick}>Home</button>
        <button onClick={handleRandomEvent}>Surprise Me</button>     
        <Crush className="canvas"></Crush>   
        </div> 
      </>}
      </div>

      {!playing && finished &&
        
      <>
        <FinishPage monsters={monsters} finalScore={finalScore} name={name} addMonster={addMonster} deleteMonster={deleteMonster}></FinishPage> 
        <Grave className="canvas"></Grave>
        <button className="game-button" onClick={startGame}> <img src={playAgainButton} width="160" height="40" /></button>

      </>}
      
    </>

  )}
      

export default Game;