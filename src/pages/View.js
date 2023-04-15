import React from 'react'
import { useParams } from 'react-router-dom'
import {doc, getDoc } from 'firebase/firestore'
import View2 from './View2'
import { db } from './firebase'
import styled from 'styled-components'
import moment from 'moment'
const View = () => {
  const[single, setSingle]=React.useState({})
  const {id} = useParams()
  const useInfo = doc(db,"users",id)
  React.useEffect(()=>{
      getDoc(useInfo)
      .then((snapshot)=>{
         if (snapshot) {
          setSingle(snapshot.data())
         }
      })
    }
  ,[])

  const upDate =()=>window.scrollTo({top: document.documentElement.scrollHeight, behavior: "smooth"})
   
  
  return (
    <Showcase>
        <div className='title'><h1>{single.name}'s Record</h1></div>
       <div className='testing'>
        <button onClick={upDate}>New file</button>
        </div>
      <div className='sub'>
        <div className='sub-child'>
          <div><h3>Full Name:</h3> {single.name}</div>
          <div><h3>Gender:</h3> {single.gender}</div>
          <div>{single.timestamp&&moment(single.timestamp.toDate()).format("llll")}</div>
        </div>
        <div className='sub-child'>
          <div><h3>Date of birth:</h3> {single.dob}</div>
          <div><h3>State of origin:</h3> {single.state}</div>
        </div>
        <div className='sub-child'>
          <div><h3>Phone no:</h3> {single.phone}</div>
          <div><h3>Allergies:</h3> {single.allergies}</div>
        </div>
        <div className='sub-child'>
          <div><h3>Blood group:</h3> {single.bloodgroup}</div>
          <div><h3>Genotype:</h3> {single.genotype}</div>
        </div>
        <div className='sub-child'>
          <div><h3>Next of kin:</h3> {single.nok}</div>
          <div><h3>Next of kin contact:</h3> {single.nokn}</div>
        </div>
        <div className='sub-child'>
          <div><h3>Past surgery:</h3> {single.prevsurgery}</div>
          <div><h3>Weight:</h3> {single.weight}</div>
        </div>
      </div>
     <View2  path={`users/${id}/first`}/>
     
    </Showcase>
  )
}

export default View
const Showcase =styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 background-color: rgb(97, 89, 89);
 text-align: center;
 .sub{
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  background:linear-gradient(135deg, rgba(255, 255, 255, 0.699), rgba(197, 128, 128, 0.192));
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);   z-index: 999;
  border: 1px solid rgba(43,43,43,0.568);
  z-index: 0;
  border-radius: 10px;
 }
.sub-child{
  display: flex;
  margin-bottom:30px;
  justify-content: space-between;
  width: 80vw;
  padding: 10px;

}
h3{
  display: inline;
}
.title{
  margin-top: 80px;
  color: white;

}
.testing{
  display: flex;
  width: 83vw;
  justify-content: flex-end;
}
button{
  margin-right: 10px;
  padding: 5px 17px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 3px;
}
`