import styled from 'styled-components'

export const MainContainer = styled.div`
   min-height: 100vh; 
   display: flex; 
   flex-direction: column; 
   justify-content: center; 
   align-items: center;/
`

export const NotesContainer = styled.div`
    width: 80%; 
    box-shadow: 0px 0px 5px 2px #d8d8d8, -0px -0px 5px 2px #d8d8d8;
    padding: 2%; 
    border-radius : 10px; /
`

export const Heading = styled.h1`
   font-family: Bree Serif;
   color: #4c63b6;/
`

export const Input = styled.input`
   width: 100%; 
   padding: 2% 0%;
   background-color: transparent; 
   border: none;
   color: #475569;
   font-weight: 600;
   
   &:focus {
      outline: none;
   }
   
   /
`

export const TextArea = styled.textarea`
   min-width: 100%; 
   max-width: 100%; 
   min-height: 100px; 
   max-height: 100px; 
   overflow: auto;
   color: #475569;
   border: none;
   font-weight: 600;
   &:focus {
      outline: none;
   }
   
   /
`

export const Button = styled.button`
    background-color: #4c63b6;
    color: #ffffff;
    border: none; 
    border-radius: 4px; 
    padding: 1% 4% ;/
`

export const NotesUl = styled.ul`
  padding: 0px ; 
  width: 80%; 
  list-style-type: none;
  display: flex ; 
  flex-wrap: wrap;/
`
