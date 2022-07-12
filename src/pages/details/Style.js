import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: grid;
  grid-template-rows: 20% 50%;
  gap: 3rem;
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
`;
export const DetailsContainer2 = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  margin: 1rem;
  align-items: center;
  border: 1px solid white;
  height: 20rem;
  margin-bottom: 3rem;
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
