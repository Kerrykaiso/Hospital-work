import React from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from './firebase'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
const Add = () => {
    const [data, setData]= React.useState({name:"", dob:"",bloodgroup: "",genotype:"",
    state:"",gender:"",phone:"",allergies:"None",atm:"None", nok:"",nokn:"",prevsurgery:"",weight:""})
    const navigate =useNavigate()
    function handleChange(e){
      const{name,value,type,checked}=e.target
       setData((prev)=>{
         return {
            ...prev,
            [name]:type==="checkbox"? checked:value
          }
        })
    }

   const send =async(e)=>{
       e.preventDefault()
      const res =await addDoc(collection(db,"users"),{
         ...data,
          timestamp: serverTimestamp()
          })
          navigate("/home")
      console.log(res.id)
   }

  return (
    <Display>
        <form onSubmit={send}>
          <label htmlFor='fullname'>Full Name:</label>
            <input 
            type="text"
            name="name"
            onChange={handleChange}
            value={data.name}
            id="fullname"
            required
             />

           <label htmlFor='dob'>Date of birth</label>
           <input 
            type="date"
            name="dob"
            onChange={handleChange}
            value={data.dob}
            id="dob"
            required
             />
           <label htmlFor='BG'>Blood group:</label>
           <input 
            type="text"
            name="bloodgroup"
            onChange={handleChange}
            value={data.bloodgroup}
            placeholder="Blood group"
            id='BG'
            required
             />
            <br />
            <label htmlFor='genotype'>Genotype</label>
            <input 
            type="text"
            name="genotype"
            onChange={handleChange}
            value={data.genotype}
            id="genotype"
            required
             />
            <label htmlFor='SOO'>State of origin:</label>
            <input 
            type="text"
            name="state"
            onChange={handleChange}
            value={data.state}
            placeholder="State of origin"
            id="SOO"
            required
             />
            <label htmlFor='number'>phone number:</label>
             <input 
              type="text"
              name="phone"
              id='number'
              onChange={handleChange}
              value={data.phone}
              required
             />
             <br />
              <label htmlFor='allergy'>Allergies to food:</label>
             <input 
              type="text"
              name="allergies"
              id='allergy'
              onChange={handleChange}
              value={data.allergies}
              required
             />
              <label htmlFor='allergy'>Allergies to medication:</label>
             <input 
              type="text"
              name="atm"
              id='allergy'
              onChange={handleChange}
              value={data.atm}
              required
             />
              <label htmlFor='nok'>Next of kin:</label>
             <input 
              type="text"
              name="nok"
              id='nok'
              onChange={handleChange}
              value={data.nok}
              required
            />
            <br />
             <label htmlFor='nokn'>Next of kin contact:</label>
             <input 
              type="text"
              name="nokn"
              id='nokn'
              onChange={handleChange}
              value={data.nokn}
              required
            />
              <label htmlFor='ps'>Previous surgery:</label>
             <input 
              type="text"
              name="prevsurgery"
              id='ps'
              onChange={handleChange}
              value={data.prevsurgery}
              required
            />
             <label htmlFor='kg'>Weight:</label>
             <input 
              type="text"
              name="weight"
              id='kg'
              onChange={handleChange}
              value={data.weight}
              required
            />
            <fieldset>
              <legend>Gender</legend>
              <input 
                id="male"
                type="radio"
                name="gender"
                onChange={handleChange}
                value="male"
                checked={data.gender==="male"}
                required
               />
              <label htmlFor='male'>Male</label>
               <br />
              <input 
                id="female"
                type="radio"
                name="gender"
                onChange={handleChange}
                value="female"
                checked={data.gender==="female"}
              />
             <label htmlFor='female'>Female</label>

            </fieldset>
           
            <button type='submit' onClick={send}>send</button>
        </form>
    </Display>
  )
}

export default Add
const Display = styled.form`
 form{
  height: 100vh;
  padding-top: 100px;
 }
 fieldset{
  width: 20%;
 }
 input{
  margin: 6px;
  margin-bottom: 40px;
  border-radius: 7px;
  border: 1px grey solid;
 }
 input[type=text],[type=date]{
  width: 250px;
  padding: 8px;
 }
 button{
  margin: 10px;
  padding: 6px 20px;
  color: white;
  background-color: black;
  border: none;
  border-radius:5px;
  margin-left: 35rem;
 }
`