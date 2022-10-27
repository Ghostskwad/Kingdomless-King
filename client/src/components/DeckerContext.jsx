import React, { useContext, useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import axios from "axios"

const DeckerContext = React.createContext()

const useSibling = () => {
    return useContext(DeckerContext)
}

function DeckerProvider() {
    const [sibling, setSibling] = useState()
    const [siblingHealth, setSiblingHealth] = useState()
    const [siblingModifiers, setSiblingModifiers] = useState()


    useEffect(() => {
        axios.get('/characters/2').then(res => {
            setSibling(res.data)
            setSiblingHealth(res.data.health)
        })
        axios.get('/character_modifiers/2').then(res => setSiblingModifiers(res.data))
    }, [])
   

    const handleSiblingHealth = (value) => {
        setSiblingHealth(value)
    }

    const handleSiblingModifiers = (id) => {
        axios.get(`/character_modifiers/${id}`).then(res => setSiblingModifiers(res.data))
    }
    

    return <DeckerContext.Provider value={{ sibling, siblingHealth, siblingModifiers, handleSiblingHealth, handleSiblingModifiers }}>
            <Outlet />
        </DeckerContext.Provider>
}

export { DeckerProvider, useSibling }