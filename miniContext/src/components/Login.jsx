import React from 'react'
import UserContext from '../context/UserContext'
import { useContext ,useState} from 'react'

function Login() {
     const {setUser} = useContext(UserContext)

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const handleSubmit =(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
        <h1>Login Page</h1>
        <input type="text" 
        value={username} 
        placeholder='Username' 
        onChange={(e)=>setUsername(e.target.value)}
         />
         <input type="text" 
        value={password} 
        placeholder='Password' 
        onChange={(e)=>setPassword(e.target.value)}
         />
         <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login