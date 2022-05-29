import '../App.css';
import React, {useState, useEffect, useRef} from 'react';
import Header from '../components/Header.js'
import Timer from '../components/Timer';
import egg from "/Users/andrewredman/CodeClan_work/group_project/chi-beas/client/src/images/Egg.png"
const spriteWidth = 180
const spriteHeight = 120
let frameX = 0
let frameY = 0
let gameFrame = 0
const staggerFrames = 15
const TIME_LIMIT = 30000;


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
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  return <canvas ref={canvasRef} {...props}/>
}



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
        <Canvas id="canvas"></Canvas>
      </>}
    

      {!playing && finished &&
      <>
        <h1>Finished Game</h1> 
      </>}
    </>
  )
})

export default Game;
