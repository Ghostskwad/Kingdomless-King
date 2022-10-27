import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Wave from 'react-wavify'

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
        navigate('/scene')
    }

    return(
        <div> 
             {player ?
            <div>
            <h2>Welcome, {player.username}</h2>
            <button onClick={handleLogout}>
                    Logout
            </button>
            </div>
            
            :
            <div>
            <h2>Loading</h2>
            </div>}
            
            <Wave mask="url(#mask)" fill="#af111c" options={{
                        height:50,
                        amplitude: 40,
                        speed: 0.15,
                        points: 7
                    }}>
                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                        <stop offset="0" stopColor="white" />
                        <stop offset="0.5" stopColor="black" />
                    </linearGradient>
                    <mask id="mask">
                        <text x="50%" y="90%"  class="title" text-anchor="middle" fill="white">KINGDOMLESS KING</text>
                    </mask>
                </defs>
            </Wave>

            <div id="thing3">
            <button id="adventure" onClick={handleClick}>
                    Begin Descent
            </button>
            </div>

        </div>
    )
}

export default TitleScreen