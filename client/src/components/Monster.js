import React, {useEffect, useRef} from 'react';
import egg from "../images/Egg.png"
import grave from "../images/grave.png"
import idle3 from "../images/idle3.png"

const spriteWidth = 180
const spriteHeight = 120
let frameX = 0
let frameY = 0
let gameFrame = 0
const staggerFrames = 15
const staggerFramesIdle = 30
const staggerFramesGrave = 50

const Egg = props =>{

    const canvasRef = useRef (null)

    const eggImage = new Image()
    eggImage.src = egg

    const draw = (context) => {
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
    },[draw])
    return <canvas ref={canvasRef} {...props}/>
}

export const Idle = props =>{

    const canvasRef = useRef (null)

    const idleImage = new Image()
    idleImage.src = idle3

    const draw = (context) => {
        context.clearRect (0,0,context.canvas.width, context.canvas.height)
      // context.fillReact = (100,30,100,100)
    context.drawImage(idleImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth,spriteHeight)
    if (gameFrame % staggerFramesIdle == 0){
        if (frameX < 9) frameX++ 
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
    },[draw])
    return <canvas ref={canvasRef} {...props}/>
}

export const Grave = props =>{

    const canvasRef = useRef (null)

    const graveImage = new Image()
    graveImage.src = grave

    const draw = (context) => {
        context.clearRect (0,0,context.canvas.width, context.canvas.height)
      // context.fillReact = (100,30,100,100)
    context.drawImage(graveImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth,spriteHeight)
    if (gameFrame % staggerFramesGrave == 0){
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
    },[draw])
    return <canvas ref={canvasRef} {...props}/>
}

export default Egg;
