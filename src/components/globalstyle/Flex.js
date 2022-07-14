import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  align-items: ${({ align }) => (align ? align : "center")};
  flex-direction:${({direction})=>(direction ? direction : "row")}
  flex-wrap: ${({ wrap }) => wrap && wrap};
`;

export default Flex;
