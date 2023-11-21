import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${props => props.$semBG ? "#000" : "#10263B"};
  border-radius: 20px;
  height: 400px;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default Wrapper;

