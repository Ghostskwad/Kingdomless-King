import React, { useContext, useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import axios from "axios"

const StoryContext = React.createContext()

const useStory = () => {
    return useContext(StoryContext)
}

function StoryProvider() {
    const [story, setStory] = useState()
    const [storyId, setStoryId] = useState(1)
    const navigate = useNavigate()

    useEffect(() => {
    axios.get(`/stories/${storyId}`).then(res => {setStory(res.data.paragraph)})
    }, [storyId])

    const handleStoryId = () => {
        setStoryId(storyId + 1)
        if (storyId === 9) {navigate('/battle')}
    }

    return <StoryContext.Provider value={[story, storyId, handleStoryId]}>
            <Outlet />
        </StoryContext.Provider>
}

export { StoryProvider, useStory}