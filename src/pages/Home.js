import React from 'react'
import { onSnapshot,collection,doc,deleteDoc } from 'firebase/firestore'
import { db } from './firebase'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Popup from './Popup'

const Home = () => {
  const [user, setUser] = React.useState([])
  const [query, setQuery] = React.useState("")
  const[trigger, setTrigger]=React.useState(false)
  const[meOnly, setMeonly]=React.useState("")

  React.useEffect(() => {
  onSnapshot(collection(db, "users"),(snapshot)=>{setUser(snapshot.docs.map((doc)=>({...doc.data(), id:doc.id})))
  }) 
  }, [])
  const show =(id)=>{
    setTrigger(true)
    setMeonly(id)
  }
  const handleDelete =async (id)=>{
    setUser(user.filter((item)=>item.id !== id))
     const userDoc = doc(db, "users",id)
    await deleteDoc(userDoc)
    setTrigger(false)
  }
 
  return (
    <>
    <List>
      <input type="search"
          onChange={(e)=>{setQuery(e.target.value)}}
          placeholder="search name..."
       />
      {user.filter((patient)=>{
        if(query===""){
          return patient
        }
        else if(patient.name.toLowerCase().includes(query.toLowerCase())){
          return patient
        }
      }).map((patient)=>{
        return <Patient key={patient.id}>
          <div>{patient.name}</div> 
        <div>{patient.bloodgroup}</div>
        <div>{patient.gender}</div>
        <Link to={`/home/${patient.id}`}>View</Link>
        <button onClick={()=>show(patient.id)}>Delete</button>
        </Patient>
       })
      }
      <Popup trigger={trigger} handleDelete={handleDelete} meOnly={meOnly} setTrigger={setTrigger}/>

    </List>

    </>
  )
}

export default Home
const List = styled.div`
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
input{
  width: 300px;
  margin: 5px;
  margin-top: 80px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;
}
`
const Patient = styled.div`
 display: flex;
 justify-content: space-around;
 margin-top: 10px;
 background-color: rgb(230, 224, 217);
 padding: 15px;
 width: 95%;
 border-radius: 4px;
 box-shadow:0px 4px 3px grey;
 button{
  background-color: red;
  border: none;
  padding: 5px 15px;
  border-radius: 3px;
  color: white;
 }
`

