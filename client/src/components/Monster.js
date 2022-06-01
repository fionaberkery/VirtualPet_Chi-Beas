import React, {useEffect, useRef} from 'react';
import egg from "../images/Egg.png"
import grave from "../images/grave.png"
import idle3 from "../images/idle3.png"
import eating from "../images/Eating.png"
import play from "../images/play.png"
import poop from "../images/Poop.png"
import sick from "../images/Sickguy.png"
import crush from "../images/crush.png"
import snoozin from "../images/snoozin.png"
import dance from "../images/dance.png"
import onFire from "../images/onFire.png"

const spriteWidth = 180
const spriteHeight = 120
let frameX = 0
let frameY = 0
let gameFrame = 0
const staggerFrames = 6
const staggerFramesPoop = 10
const staggerFramesIdle = 7
const staggerFramesGrave = 15
const staggerFramesPlay = 7
const staggerFramesSick = 12
const staggerFramesEating = 10
const staggerFramesSnoozin = 15
const staggerFramesFire = 15

const Egg = props =>{

    const canvasRef = useRef (null)

    const eggImage = new Image()
    eggImage.src = egg

    const draw = (context) => {
        
        context.clearRect (0,0,context.canvas.width, context.canvas.height)
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

export const Eating = props =>{

    const canvasRef = useRef (null)

    const eatingImage = new Image ()
    eatingImage.src = eating

    const draw = (context) => {
        context.clearRect (0,0,context.canvas.width, context.canvas.height)
        context.drawImage(eatingImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth,spriteHeight)
        if (gameFrame % staggerFramesEating == 0){
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

export const Sick = props =>{

    const canvasRef = useRef (null)

    const sickguyImage = new Image ()
    sickguyImage.src = sick

    const draw = (context) => {
        context.clearRect (0,0,context.canvas.width, context.canvas.height)
        context.drawImage(sickguyImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth,spriteHeight)
        if (gameFrame % staggerFramesSick == 0){
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

export const Poop = props =>{

    const canvasRef = useRef (null)

    const poopImage = new Image ()
    poopImage.src = poop

    const draw = (context) => {
        context.clearRect (0,0,context.canvas.width, context.canvas.height)
        context.drawImage(poopImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth,spriteHeight)
        if (gameFrame % staggerFramesPoop == 0){
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

export const Play = props =>{

    const canvasRef = useRef (null)

    const playImage = new Image ()
    playImage.src = play

    const draw = (context) => {
        context.clearRect (0,0,context.canvas.width, context.canvas.height)
        context.drawImage(playImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth,spriteHeight)
        if (gameFrame % staggerFramesPlay == 0){
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

export const Idle = props =>{

    const canvasRef = useRef (null)

    const idleImage = new Image()
    idleImage.src = idle3

    const draw = (context) => {
        context.clearRect (0,0,context.canvas.width, context.canvas.height)
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

export const Crush = props =>{
    const canvasRef = useRef (null)
    const crushImage = new Image ()
    crushImage.src = crush

    const draw = (context) => {
        context.clearRect (0,0,context.canvas.width, context.canvas.height)
        context.drawImage(crushImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth,spriteHeight)
            if (gameFrame % staggerFramesEating == 0){
            if (frameX < 6) frameX++ 
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

export const Snoozin = props =>{
    const canvasRef = useRef (null)
    const snoozinImage = new Image()
    snoozinImage.src = snoozin

    const draw = (context) => {
        context.clearRect (0,0,context.canvas.width, context.canvas.height)
        context.drawImage(snoozinImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth,spriteHeight)
        if (gameFrame % staggerFramesSnoozin == 0){
            if (frameX < 3) frameX++ 
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

export const Dance = props =>{

    const canvasRef = useRef (null)

    const danceImage = new Image()
    danceImage.src = dance

    const draw = (context) => {
        context.clearRect (0,0,context.canvas.width, context.canvas.height)
        context.drawImage(danceImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)
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

export const Fire = props =>{

    const canvasRef = useRef (null)

    const fireImage = new Image()
    fireImage.src = onFire

    const draw = (context) => {
        context.clearRect (0,0,context.canvas.width, context.canvas.height)
        context.drawImage(fireImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)
        if (gameFrame % staggerFramesFire == 0){
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
