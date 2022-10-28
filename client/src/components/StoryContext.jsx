import React, { useContext, useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import axios from "axios"

const StoryContext = React.createContext()

const useStory = () => {
    return useContext(StoryContext)
}

function StoryProvider() {
    const [scene1, setScene1] = useState()
    const [scene1Paragraph, setScene1Paragraph] = useState()
    const [scene1Id, setScene1Id] = useState(2)
    const [scene2, setScene2] = useState()
    const [scene2Paragraph, setScene2Paragraph] = useState()
    const [scene2Id, setScene2Id] = useState(11)
    const [scene3, setScene3] = useState()
    const navigate = useNavigate()

    useEffect(() => {
    axios.get('/scenes/1').then(res => {
        setScene1(res.data.stories)
        setScene1Paragraph(res.data.stories[0].paragraph)
    })
    axios.get('/scenes/2').then(res => {
        setScene2(res.data.stories)
        setScene2Paragraph(res.data.stories[0].paragraph)
    })
    axios.get('/scenes/3').then(res => {setScene3(res.data.stories)})
    }, [])

console.log(scene2)
    const handleScene1 = () => {
        setScene1Id(scene1Id + 1)
        if (scene1.map(scene => scene.id).includes(scene1Id)){
        setScene1Paragraph(scene1.filter(scene => scene.id === scene1Id)[0].paragraph)
        }
            else {navigate('/battle')}
    }
    const handleScene2 = () => {
        setScene2Id(scene2Id + 1)
        if (scene2.map(scene => scene.id).includes(scene2Id)){
        setScene2Paragraph(scene2.filter(scene => scene.id === scene2Id)[0].paragraph)
        }
            else {navigate('/battle')}
    }
    

    return <StoryContext.Provider value={{scene1Paragraph, scene2Paragraph, handleScene1, handleScene2}}>
            <Outlet />
        </StoryContext.Provider>
}

export { StoryProvider, useStory}