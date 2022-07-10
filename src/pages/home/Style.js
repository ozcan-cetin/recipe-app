import styled from "styled-components";

export const Container = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 2rem;
margin: 1rem;
/* border: 1px solid red; */
/* justify-content: space-around; */
/* align-items: center;
flex-wrap: wrap; */
`

export const Recipe = styled.div`
display: grid;
height: 300px;
grid-template-rows:20% 80% ;
/* border: 3px solid black; */
align-items: center;
justify-content: center;
font-size:.8rem;
box-shadow: 3px 3px 5px black;
:hover{
    transform: scale(90%);
}
h3{
    font-size: 1rem;
}
img{
    width:200px
}
`