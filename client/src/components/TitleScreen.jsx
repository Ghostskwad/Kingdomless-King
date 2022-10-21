import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function TitleScreen({player, setPlayer}) {
    const navigate = useNavigate()
    // axios.get(`/stories/1`).then(res => {console.oog(res.data)})
   
    const handleLogout = () => {
        axios.delete('/logout').then(res => {
            setPlayer(null)
            })
        navigate('/', { replace: true })
    } 

    const handleClick = () => {
        navigate('/scene1')
    }

    return(
        <div>
            {player ?
            <div>
            <h2>Welcome, {player.username}</h2>
            <button onClick={handleLogout}>
                    Logout
            </button>
            <button onClick={handleClick}>
                    Begin
            </button>
            </div>
            :
            <div>
            <h2>Loading</h2>
            </div>}
        </div>
    )
}

export default TitleScreen