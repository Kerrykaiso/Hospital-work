import React from 'react'
import { collection } from 'firebase/firestore'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import { db } from './firebase'
import Form1 from './Form1'
import styled from 'styled-components'
import moment from 'moment'

const View2 = ({path}) => {
 const query =collection(db, path)
const[docs, loading,error] =useCollectionData(query)

  return (
    <div>
      {loading && "Loading..."}
     {
        docs?.map((first)=>{
          return <Record>
            <div className='details'>
              <div><p>Reason:</p> {first.case}</div>
              <div><p>Doctor:</p> {first.doc}</div> 
              <div>{first.timestamp&&moment(first.timestamp.toDate()).format("llll")}</div>
            </div> 
            <div>{first.test}</div>
            <div>{first.result}</div>  
            <div>{first.medication}</div>  
  
          </Record> 
        })
     }
     <Form1 path={path}  />
    </div>
  )
}

export default View2
const Record= styled.div`
 display: flex;
 flex-direction: column;
 background-color: white;
 border-radius: 7px;
 margin: 20px;
 .details{
  display: flex;
  justify-content: space-around;
 }
 div{
  margin-bottom: 20px;

 }
 p{
  display: inline;
  font-weight: bold;
 }
`