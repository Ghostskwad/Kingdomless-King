import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function SignupScreen ({setPlayer}) {
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

  function onSubmit(e) {
    e.preventDefault()

    axios.post("/signup", {
        username,
        password
      })
      .then(res => {
        setPlayer(res.data)
        })
    navigate('/title-screen')
  }

    return(
    <div className="form">
            <h2>Signup</h2>
        <form onSubmit={onSubmit}>
        <input placeholder="Username"type='text' name='username' value={username} onChange={(e) => handleUsernameChange(e)} />
      <div></div>
        <input placeholder="Password" type='password' name='password' value={password} onChange={(e) => handlePasswordChange(e)} />
       
       <div></div>
        <input type='submit' value='Signup!' />
      </form>
         </div>
  )}

  export default SignupScreen