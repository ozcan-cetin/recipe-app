import styled from "styled-components";

export const DetailsContainer = styled.div`
display: grid;
grid-template-rows: 20% 50%;
gap: 3rem;
margin: 1rem;
background-color: lightblue;
padding-bottom: 2rem;
/* justify-content:space-around; */
align-items: center;
/* border: 1px solid red; */
`
export const DetailsContainer2 = styled.div`
display: flex;
justify-content: space-around;
gap: 2rem;
margin: 1rem;
align-items: center;
border: 1px solid white;
height: 20rem;
margin-bottom: 3rem;
/* justify-content: center;
align-items: center;
flex-wrap: wrap; */ */
`
export const Nutrients = styled.div`
display:flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;
h3{
    font-size: medium;
}
/* border: 1px solid red; */
/* color: red; */
`
