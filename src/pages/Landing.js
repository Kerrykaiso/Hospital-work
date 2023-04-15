import  {useState} from 'react'
import styled from "styled-components"
import { signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "./firebase"
import { useNavigate } from 'react-router-dom'
const Landing = ({setIslogged}) => {
    const [hospital, setHospital]= useState("")
    const [password, setPassword]= useState("")
    const [error, setError]= useState(false)
    const navigate=useNavigate()
     const login =(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth, hospital, password)
          .then((userCredential) => {
            const user = userCredential.user
            console.log(user)
            navigate("/home")
            setIslogged(true)
          })
          .catch((error) => {
             setError(true)
          });
     }
  return (
    <Intro>

        <form onSubmit={login} className="landing">
            <input
             type="email"
             placeholder ="Name"
             onChange={(e)=>setHospital(e.target.value)}
            />
            <input
             type="password"
             placeholder ="Password"
             onChange={(e)=>setPassword(e.target.value)}

            />
            <button type="submit" onClick={login}>Log in</button>
            {error && <p>wrong email or password</p>}
        </form>
     </Intro>

        
    
  )
}


export default Landing
export const Intro =styled.div`
color: black;
display: flex;
height: 100vh;
justify-content: center;
align-items: center;
.landing{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    background-color: rgba(150, 71, 253, 0.486);
    padding: 40px;
    height: 40vh;
    border-radius: 7px;
}
input {
    padding: 10px;
    margin: 1rem;
    border-radius: 5px;
    border: none;
    width: 300px;
    
}
button{
    padding: 0.5rem 1rem;
    text-align: center;
    border: none;
    border-radius:4px;
   
}
p{
  color: red;
}
`