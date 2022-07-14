import styled from "styled-components";
import Flex from "../../components/globalstyle/Flex.js";

const Logincontainer = styled(Flex)`
  height: calc(100vh - 4rem);
  background-image: url("https://picsum.photos/1600/900");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Formcontainer = styled.form`
display: flex;
flex-direction: column;
`

export const Input = styled.input`
width: 15rem;
  padding: 0.5em;
  margin: 0.5em;
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
  border: none;
  border-radius: 3px;
  display: block;
`;

export default Logincontainer;
