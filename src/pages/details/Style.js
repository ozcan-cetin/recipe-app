import styled from "styled-components";

export const DetailsContainer = styled.div`
  /* display: grid;
  grid-template-rows: 20% 50%; */
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 1rem;
  background-color: lightblue;
  padding-bottom: 2rem;
  align-items: center;
  text-align: center;
  /* border: 1px solid red; */
  button {
    width: 100px;
    margin: auto;
    background-color: brown;
  }
  @media(max-width:769px){
    display: flex;
    flex-direction: column;
    /* padding-top: 1rem; */
   /* gap: 1rem; */
   img{
    width: 200px;
   }
   /* border: black 3px solid; */
   height: min-content;
}
`;
export const DetailsContainer2 = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  padding: 1rem;
  margin: 1rem;
  align-items: center;
  border: 1px solid white;
  height: 20rem;
  margin-bottom: 3rem;
  @media(max-width:769px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: red 2px solid; */
    height: min-content;
    padding: 0;
}
`;
export const Nutrients = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  h3 {
    font-size: medium;
  }
`;
