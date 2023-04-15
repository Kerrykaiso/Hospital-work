import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
 <div>
     <List>
            <h3>LOGO</h3>
             <ul>
                <NavLink to="/home">
                <li>Home</li>
                </NavLink>
               <NavLink to="/about">
               <li>About</li>
               </NavLink>
               <NavLink to="/add">
               <li>Add</li>
               </NavLink>
                <li>Something</li>
             </ul>
    </List>
 </div>
  )
}

export default Nav
const List = styled.nav`
display: flex;
justify-content: space-around;
align-items: center;
min-height: 10vh;
background-color: grey;
ul {
    display: flex;
    width: 60%;
    justify-content: space-around;
    list-style-type: none;
    
}
li{
  padding: 10px;
  color: white
}
`