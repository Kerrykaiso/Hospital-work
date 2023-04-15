import { createGlobalStyle } from "styled-components"
export const lightTheme ={
    body: "#fff",
    fontColor: "#000",

}
export const darkTheme ={
    body: "#000",
    fontColor: "#fff",
}
export const GlobalStyle =createGlobalStyle`
*{
    margin: 0;
}
body{
    background-color: ${(props)=>props.theme.body}
    position: relative;
}
.landing{
box-shadow:0px 0px 11px ${(props)=>props.theme.fontColor};

button{
    background-color: ${(props)=>props.theme.body};
    color:${(props)=>props.theme.fontColor};
}
}
Nav{
 position: fixed;
 width: 100%;
 top: 0;
 z-index: 1;
 }
`