import { useStory } from './StoryContext'
import { useNavigate } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import Header from './Header'
import Wave from 'react-wavify'
import './CustomCss.css'

function Scene (){
    const {scene1Paragraph, scene2Paragraph, handleScene1, handleScene2} = useStory()
    const params = useParams()
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
        {params.id === '1' ? <p onClick={handleScene1}>{scene1Paragraph}</p> : null}
        {params.id === '2' ? <p onClick={handleScene2}>{scene2Paragraph}</p> : null}
        </div>
        </div>
        </div>
    )
}

export default Scene