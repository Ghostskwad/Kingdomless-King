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

  function submit(e) {
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
      <form onSubmit={submit}>
  
      <div class="segment">
        <h1>Sign up</h1>
      </div>
      
      <label>
        <input type="text" placeholder="Username" value={username} onChange={(e) => handleUsernameChange(e)}/>
      </label>
      <label>
        <input type="password" placeholder="Password"value={password} onChange={(e) => handlePasswordChange(e)}/>
      </label>
      <button class="red" type="submit">Sign up</button>

    </form>
  )}

  export default SignupScreen