import React from 'react';
import "./App.css"
import Landing from './pages/Landing';
import Nav from './pages/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Add from './pages/Add';
import View from './pages/View';
import { Route, Routes} from "react-router-dom"
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyle } from './pages/theme';
 
function App() {
  const[isLogged, setIslogged] = React.useState(true)
  const[theme, setTheme] =React.useState("light")
  const themeSetter =()=>{
    theme==="light"? setTheme("dark"):setTheme("light")
  }
  return (
    <ThemeProvider theme={theme==="light"? lightTheme:darkTheme}>
     <div>
     <GlobalStyle />
     {isLogged===false ? <Nav />:<Landing setIslogged={setIslogged}/> }
       <Routes>
       <Route path='/home' exact element={<Home/>} />
       <Route path='/home/:id' element={<View/>} />
       <Route path='/about' element={<About/>} />
       <Route path='/add' element={<Add/>} />
       </Routes>
       

     </div>
    </ThemeProvider>
  );
}

export default App;
