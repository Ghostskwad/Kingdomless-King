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
    const [sibling, setSibling] = useState()
    const [siblingHealth, setSiblingHealth] = useState()
    const [characterModifiers, setCharacterModifiers] = useState()
    const [siblingModifiers, setSiblingModifiers] = useState()

    const getCharacter = async () => {
        const res = await axios.get('/characters')
        const data = await res.data[0]

        const getSibling = (results) => {
            axios.get(`/characters/${results.siblings[0].id}`).then(res => {setSibling(res.data) 
                                                                            setSiblingHealth(res.data.health)})
        }
    
        getSibling(data)
        setCharacter(data)
        setCharacterHealth(data.health)

    }
    console.log(siblingHealth)

    useEffect(() => {
        getCharacter()
        
        axios.get('/character_modifiers/1').then(res => setCharacterModifiers(res.data))
        axios.get('/character_modifiers/2').then(res => setSiblingModifiers(res.data))
    }, [])
   

    const handleCharacterHealth = () => {
        setCharacterHealth()
    }
    const handleSiblingHealth = () => {
        setSiblingHealth()
    }

    const handleSiblingModifiers = (id) => {
        axios.get(`/character_modifiers/${id}`).then(res => setSiblingModifiers(res.data))
    }
    const handleCharacterModifiers = (id) => {
        axios.get(`/character_modifiers/${id}`).then(res => setSiblingModifiers(res.data))
    }
    // console.log(modifiers)

    return <CharacterContext.Provider value={{ character, sibling, characterHealth, siblingHealth, characterModifiers, siblingModifiers, handleCharacterHealth, handleSiblingHealth, handleCharacterModifiers, handleSiblingModifiers }}>
            <Outlet />
        </CharacterContext.Provider>
}

export { CharacterProvider, useCharacter }