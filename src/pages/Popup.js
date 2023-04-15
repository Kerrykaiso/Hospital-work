import React from 'react'
import styled from 'styled-components'

const Popup = ({trigger, meOnly,handleDelete,setTrigger}) => {
  return trigger ? (
    <Display>
       <div><h3>Are you sure you want to delete this record?</h3></div>
       <div className='btn'>
          <button onClick={()=>{handleDelete(meOnly)}}>Yes</button>
          <button onClick={()=>{setTrigger(false)}}>Cancel</button>
      </div>

        

    </Display>
  ):""
}

export default Popup
 const Display =styled.div`
   z-index: 999999;
   Display: flex;
   position: absolute;
   top:50%;
   flex-direction: column;
   background:linear-gradient(135deg, rgba(77, 223, 223, 0.514),rgba(197, 128, 128, 0.192));
   backdrop-filter: blur(8px);
   -webkit-backdrop-filter: blur(35px);   z-index: 999;
   height : 20vh;
   justify-content: space-around;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
   'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
   sans-serif;
   padding: 1rem;
   border-radius: 7px;
   .btn{
    display: flex;
    justify-content: space-around;
   }
   button{
    padding: 0.2rem 0.9rem;
   }
   h3{
    color:rgb(82, 78, 78);
   }
 `