// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'

// function CreateCharacter({setPlayer}) {
//     const navigate = useNavigate()
//     const [name, setName] = useState("")
    
//     function handleNameChange(e){
//         setName(e.target.value)
//     }

//     function onSubmit(e) {
//         e.preventDefault()
    
//         axios.post("/characters", {
//             name,
//             pronoun: "he"
//           })
//           .then(res => {
//             setPlayer(res.data)
//             })
//         navigate('/title-screen')
//       }

//     return(
//         <div>
//             <form onSubmit={onSubmit}>
//             <input placeholder="name"type='text' name='name' value={name} onChange={(e) => handleNameChange(e)} />
//             <input type='submit' value='Create!' />
//             </form>
//         </div>
//     )
// }

// export default CreateCharacter