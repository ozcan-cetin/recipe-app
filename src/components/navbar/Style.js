import styled from 'styled-components';

const Nav = styled.nav`
  color: blue;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:#E1F0DD ;
  padding-left: 1rem;
  height: 4rem;
  width: 100vw;
  li{
    list-style-type: none;
    display: inline-block;
    margin: 0 1rem;
    font-size: 1.2rem;
    :hover{
      transform: scale(110%);
    }
  }
  a{
    text-decoration: none;
    color: black;
  }
  @media (max-width: 500px) {
    display: grid;
    grid-template-rows: 50% 50%;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* width: 100vw; */
    li{
      font-size:1rem;
      margin: 0 .5rem;
      padding-bottom: .5rem;
      width: ;
  }}
`


export default Nav;
