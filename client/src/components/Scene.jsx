import { useStory } from './StoryContext'
import { useNavigate } from 'react-router-dom'

function Scene (){
    const [story, storyId, handleStoryId] = useStory()
    const navigate = useNavigate()

    return(
        <div>
            <div onClick={handleStoryId}>
                <p>{story}</p>
            </div>
        </div>
    )
}

export default Scene