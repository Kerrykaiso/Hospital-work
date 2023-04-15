import { doc, addDoc, serverTimestamp,collection } from 'firebase/firestore'
import styled from 'styled-components'
import React from 'react'
import { db } from './firebase'
const Form1 = ({path}) => {
  const [child, setChild]= React.useState({case:"",doc:"",test:"",result:"",medication:""})
  function handleSend(e){
    const{name,value,type,checked}=e.target
     setChild((prev)=>{
       return {
          ...prev,
          [name]:type==="checkbox"? checked:value
        }
      })
  }
   async function handle(e) {
    e.preventDefault()
    const docRef =collection(db, path)
    await addDoc(docRef,{
      ...child,
      timestamp: serverTimestamp()
    })
   }
  return (
    
    <div >
      <Form onSubmit={handle} >
        <label htmlFor='reason'>Reason for coming: </label>
        <select 
         id='reason'
         name='case'
         value={child.case}
         onChange={handleSend}
         >
          <option value=""></option>
          <option value="surgery">Surgery</option>
          <option value="check up">Check-up</option>
          <option value="illness">Illness</option>
          <option value="Emergency">Emergency</option>
          <option value="consultation">Consultation</option>
          <option value="antenatal">Antenatal</option>
       </select>
        <label htmlFor='dr'>Name of Doctor: </label>
        <input
          id="dr"
          type="text"
          name="doc"
          value={child.doc}
          onChange={handleSend}
        />
        <br />
        <textarea 
          name="test"
          onChange={handleSend}
          value={child.test}
          cols="60"
          rows="5"
          placeholder='Tests...'

        />
        <br />
        <textarea 
          name="result"
          onChange={handleSend}
          value={child.result}
          cols="60"
          rows="5"
          placeholder='Results...'
        />
        <br />
        <textarea 
          name="medication"
          onChange={handleSend}
          value={child.medication}
          cols="60"
          rows="5"
          placeholder='Medications...'
        />
        <br />
        <button type="submit">send</button>
      </Form>
    </div>
  )
}

export default Form1
const Form = styled.form`
width: 60vw;
margin-bottom: 20px;
select{
  width: 170px;
  margin-right: 10px;
}
input[type=text]{
  width: 170px;
  margin-bottom: 20px;
  margin-right: 70px;

}
label{
color: white;
}
textarea{
  margin-bottom: 10px;
  border-radius: 5px;
}
`