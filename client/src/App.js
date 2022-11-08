import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { StoryProvider } from './components/StoryContext'
import { CharacterProvider } from './components/CharacterContext'
import { DeckerProvider } from './components/DeckerContext'
import { EnemyProvider } from './components/EnemyContext'
import { AnimationProvider } from './components/AttackAnimation'
import axios from 'axios'
import LoginScreen from './components/LoginScreen'
import SignupScreen from './components/SignupScreen'
import TitleScreen from './components/TitleScreen'
import Scene from './components/Scene'
import Battle from './components/Battle'
// import './App.css'
// import Battle from './components/DeckerUI'

// axios.get("/me").then(resp => {console.log(resp)})

function App() {
  const [player, setPlayer] = useState(null)
  console.log(player)


  useEffect(() => {
    axios.get('/me').then(res => {
      if (res.status === 200) {
      setPlayer(res.data)}
      })
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={<LoginScreen player={player} setPlayer={setPlayer}/>} />
        <Route path ="/signup" element={<SignupScreen setPlayer={setPlayer}/>} />
        <Route element={<StoryProvider />}>
        <Route element={<CharacterProvider />}>
        <Route element={<DeckerProvider />}>
        <Route element={<EnemyProvider />}>
          <Route path ="/scene/:id" element={<Scene player={player} setPlayer={setPlayer}/>} />
          <Route element={<AnimationProvider />}>
          <Route path ="/battle" element={<Battle />} />
          </Route>
        </Route>
        </Route>
        </Route>
        </Route>
        <Route path ="/title-screen" element={<TitleScreen player={player} setPlayer={setPlayer}/>} />
      </Routes>
    </div>
  );
}

export default App;
