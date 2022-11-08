import React, { useContext, useState} from 'react'
import attack from '../images/attack-slash.png'
import spell from '../images/elements.png'
import { Outlet } from 'react-router-dom'
import {useEffect} from 'react'

const AnimationContext = React.createContext()

const useAnimation = () => {
    return useContext(AnimationContext)
}

function AnimationProvider() {
    const [animation, setAnimation] = useState('')

const handleAnimation = (value) => {
    setAnimation(value)
}

useEffect(() => {
    let element = document.getElementById('animation-box')

    function setAnimate(className, image, duration) {
        let animation = document.createElement("IMG")
        animation.className = className
        animation.src = image
        element.appendChild(animation)

        setTimeout(() => {
            animation.remove()
        }, duration)
    }

    switch(animation) {
        case 'Attack':
            setAnimate('animate-attack', attack, 1800)
            break
        case 'Spell':
            setAnimate('animate-spell', spell, 1800)
            break
        default:
            console.log('No Animation')
    } 
    
    setAnimation('')         
    

}, [animation, setAnimation])


    return <AnimationContext.Provider value={{ animation, handleAnimation }}>
            <Outlet />
        </AnimationContext.Provider>
}



export { AnimationProvider, useAnimation }