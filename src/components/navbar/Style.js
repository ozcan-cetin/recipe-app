import styled from 'styled-components';

const Nav = styled.nav`
  color: blue;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:#E1F0DD ;
  padding-left: 1rem;
  ul{
    
  }
  li{
    list-style-type: none;
    display: inline-block;
    margin: 0 1rem;
    font-size: 1.2rem;
  }
  a{
    text-decoration: none;
    color: black;
  }
`;

export default Nav;
