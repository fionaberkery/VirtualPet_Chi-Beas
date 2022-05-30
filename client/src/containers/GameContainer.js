import '../App.css';
import React, {useState, useEffect, useRef} from 'react';
import Score from '../components/Score';
import Timer from '../components/Timer';
import FinishPage from '../components/FinishPage';
import egg from "../images/Egg.png"

const spriteWidth = 180
const spriteHeight = 120
let frameX = 0
let frameY = 0
let gameFrame = 0
const staggerFrames = 15
const TIME_LIMIT = 5000;

const Canvas = props =>{

  const canvasRef = useRef (null)

  const eggImage = new Image()
  eggImage.src = egg

  const draw = (context, frameCount) => {
    context.clearRect (0,0,context.canvas.width, context.canvas.height)
    // context.fillReact = (100,30,100,100)
    context.drawImage(eggImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth,spriteHeight)
    if (gameFrame % staggerFrames == 0){
      if (frameX < 4) frameX++ 
      else frameX = 0
    }
    gameFrame++
    context.fill()
  } 

  useEffect (() =>{
    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    let frameCount = 0
    let animationFrameId
    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    return () => {
      window.cancelAnimationFrame(animationFrameId)}
    },[])
  return <canvas ref={canvasRef} {...props}/>
}

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
          internalTime={internalTime} />
        <br></br>
        <h2> canvas here </h2>
        <Canvas id="canvas"></Canvas>
        <button onClick={handleClick}>Feed</button>
      </>}
    

      {!playing && finished &&
        
      <>
      {console.log("fire")}
        <FinishPage finalScore={finalScore}/> 
      </>}
    </>
  )
})

export default Game;