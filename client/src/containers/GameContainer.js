import '../App.css';
import React, {useState, useEffect} from 'react';
import { getMonsters, postMonsters, deleteMonster as apiDeleteMonster } from '../services/GameServices';
import Score from '../components/Score';
import Timer from '../components/Timer';
import FinishPage from '../components/FinishPage';
import Egg from '../components/Monster';
import { Idle } from '../components/Monster';
import { Grave } from '../components/Monster';

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
  
  
const startGame = (()=>{
    setPlaying (true)
    setFinished(false)
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
}

const handlePlayClick = () => {
  setInternalTime((currentInternalTime) => currentInternalTime + 20000)
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
    {!playing && !finished &&
      <>
        <h1>Start Game</h1> 

        <label htmlFor='name-input'> Enter Your CB name here </label>
        <input onChange={handleNameInput} name="name-input" type="text" value={name}></input>

        <button onClick={startGame}>Start the Game!</button>
        <Egg id="canvas"></Egg>
      </>}
    
    {playing && !finished &&
      <>
        <h1>Playing Game</h1> 
        <p> {name} </p>
        <button onClick={endGame} > End Game </button>
        <p> {`Time: ${internalTime / 1000}s`} </p>
        <Timer  
          timeRate={timeRate} 
          changeInternalTime={changeInternalTime} 
          />
        <Score 
          tempFinalScore={tempFinalScore}   
          onEnd={endGame} 
          internalTime={internalTime}
          />
        <br></br>
        <Idle id="canvas"></Idle>
        <button onClick={handleFeedClick}>Feed</button>
        <button onClick={handlePlayClick}>Play</button>
      </>}
    

      {!playing && finished &&
        
      <>
      
        <FinishPage monsters={monsters} finalScore={finalScore} name={name} addMonster={addMonster} deleteMonster={deleteMonster}></FinishPage> 
        <Grave id="canvas"></Grave>
      </>}
    </>
  )}
      
      

export default Game;