import {useEffect, useRef} from 'react'
import { useStory } from './StoryContext'
import {useParams} from 'react-router-dom'
import Header from './Header'
import Wave from 'react-wavify'
import './CustomCss.css'

function Scene (){
    const {scene1Paragraph, scene2Paragraph, handleScene1, handleScene2} = useStory()
    const params = useParams()

    const ref = useRef(null);

    useEffect(() => {
        ref.current.focus();
      }, []);
    

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
        {params.id === '1' ? <p ref={ref} tabIndex={0} onKeyUp={(e) => handleScene1(e)}>{scene1Paragraph}</p> : null}
        {params.id === '2' ? <p ref={ref} tabIndex={0} onKeyUp={(e) => handleScene2 (e)}>{scene2Paragraph}</p> : null}
        </div>
        </div>
        </div>
    )
}

export default Scene