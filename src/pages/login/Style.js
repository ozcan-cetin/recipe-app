import styled from "styled-components";

const Logincontainer = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
/* align-items: center; */
min-width: 300px;
width: 30%;
height: calc(100vh - 4rem);
/* border: 1px solid red; */
margin: auto;
gap: 2rem;
`

export const Input = styled.input`
padding: 0.5em;
margin: 0.5em;
color: ${props => props.inputColor || "palevioletred"};
background: papayawhip;
border: none;
border-radius: 3px;
`;

export const Button = styled.button`
display: inline-block;
color: palevioletred;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
display: block;
`;

export default Logincontainer;