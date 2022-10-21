import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

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

  function onSubmit(e) {
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
    <div className="form">
            <h2>Log In</h2>
        <form onSubmit={onSubmit}>
        <input placeholder="Username"type='text' name='username' value={username} onChange={(e) => handleUsernameChange(e)} />
      <div></div>
        <input placeholder="Password" type='password' name='password' value={password} onChange={(e) => handlePasswordChange(e)} />
       
       <div></div>
        <input type='submit' value='Log in!' />
      </form>
      <h3>
        Don't have an account yet? Sign up!
      </h3>
      <Link to="/signup">Sign up now!</Link>
         </div>
  )}

  export default LoginScreen