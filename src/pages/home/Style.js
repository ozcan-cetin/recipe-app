import styled from "styled-components";

export const HomeBody = styled.div`
background-color:lightblue;
min-height: 100vh;
padding: 1rem;
h1{
    text-align: center;
}
`

export const FormContainer = styled.div`
display: flex;
justify-content: center;
gap: 1rem;
input{
    background-color: pink;
    color:red;
}
select{
    background-color: aqua;
}
button{
    background-color: blueviolet;
}
`
export const Container = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 2rem;
margin: 1rem;
/* border: 1px solid red; */
/* justify-content: center;
align-items: center;
flex-wrap: wrap; */ */
`

export const Recipe = styled.div`
display: grid;
height: 350px;
grid-template-rows:20% 70% 10% ;
background-color:#00ADB5 ;
/* border: 3px solid black; */
justify-content: center;
align-items: center;
font-size:.8rem;
box-shadow: 3px 3px 5px black;
padding: .5rem;
:hover{
    transform: scale(105%);
}
h3{
    font-size: 1rem;
}
img{
    width:200px;
    margin: auto;
}
`