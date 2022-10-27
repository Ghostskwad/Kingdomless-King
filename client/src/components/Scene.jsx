import { useStory } from './StoryContext'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Wave from 'react-wavify'
import './CustomCss.css'

function Scene (){
    const [story, storyId, handleStoryId] = useStory()
    const navigate = useNavigate()

    return(
        <div>
            <Header />
        <div id='thing2'>
        <div id="thing3">
            <Wave fill='#af111c'
                paused={false}
                options={{
                height: 40,
                amplitude: 80,
                speed: 0.15,
                points: 3
             }}
        />
        <p onClick={handleStoryId}>{story}</p>
        </div>
        </div>
        </div>
    )
}

export default Scene