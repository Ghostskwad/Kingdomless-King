import React, { useContext, useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import axios from "axios"

const CharacterContext = React.createContext()

const useCharacter = () => {
    return useContext(CharacterContext)
}

function CharacterProvider() {
    const [character, setCharacter] = useState()
    const [characterHealth, setCharacterHealth] = useState()
    const [characterModifiers, setCharacterModifiers] = useState()


    useEffect(() => {
    axios.get('/characters/1').then(res => {
        setCharacter(res.data)
        setCharacterHealth(res.data.health)
    })
        axios.get('/character_modifiers/1').then(res => setCharacterModifiers(res.data))
    }, [])
   

    const handleCharacterHealth = (value) => {
        setCharacterHealth(value)
    }

    const handleCharacterModifiers = (id) => {
        axios.get(`/character_modifiers/${id}`).then(res => setCharacterModifiers(res.data))
    }

    return <CharacterContext.Provider value={{ character, characterHealth, characterModifiers, handleCharacterHealth, handleCharacterModifiers }}>
            <Outlet />
        </CharacterContext.Provider>
}

export { CharacterProvider, useCharacter }