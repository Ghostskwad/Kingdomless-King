import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import * as React from 'react';
import { AwesomeButton } from "react-awesome-button"
import 'react-awesome-button/dist/styles.css'
import './Form.css'


function LoginScreen ({setPlayer}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    function handleUsernameChange(e){
        setUsername(e.target.value)
    }

    function handlePasswordChange(e){
        setPassword(e.target.value)
    }

  function submit(e) {
    e.preventDefault()

    axios.post("/login", {
        username,
        password
      })
      .then(res => {
        setPlayer(res.data)
        })
    navigate('/title-screen')
  }

    return(
      <form onSubmit={submit}>
  
      <div class="segment">
        <h1>Login</h1>
      </div>
      
      <label>
        <input type="text" placeholder="Username" value={username} onChange={(e) => handleUsernameChange(e)}/>
      </label>
      <label>
        <input type="password" placeholder="Password"value={password} onChange={(e) => handlePasswordChange(e)}/>
      </label>
      <button class="red" type="submit">Log in</button>
    
      <h3>
      Don't have an account yet? Sign up!
      </h3>
      <Link to="/signup">Sign up now!</Link>

    </form>
  )}

  export default LoginScreen