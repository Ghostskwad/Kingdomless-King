import React, { useContext, useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import axios from "axios"

const EnemyContext = React.createContext()

const useEnemy = () => {
    return useContext(EnemyContext)
}

function EnemyProvider() {
    const [enemy, setEnemy] = useState()
    const [enemyHealth, setEnemyHealth] = useState()
    const [enemyModifiers, setEnemyModifiers] = useState()

    useEffect(() => {
    axios.get('/enemies/2').then(res => {setEnemy(res.data)})
    axios.get('/enemies/1').then(res => {setEnemyHealth(res.data.health)})
    axios.get('/enemy_modifiers/1').then(res => {setEnemyModifiers(res.data)})
    }, [])

    const handleEnemyHealth = (damage) => {
        setEnemyHealth(damage)
    }


    const handleEnemyModifiers = (id) => {
        axios.get(`/enemy_modifiers/${id}`).then(res => {setEnemyModifiers(res.data)})
    }


    return <EnemyContext.Provider value={{ enemy, enemyModifiers, enemyHealth, handleEnemyModifiers, handleEnemyHealth }}>
            <Outlet />
        </EnemyContext.Provider>
}

export { EnemyProvider, useEnemy }