import styled from "styled-components";

const CardsContainer = styled.main`
width: 80%;
margin: auto;
@media (max-width: 574px) {
  display: flex;
  flex-direction: column;
  align-items: center;
}
`;

export default CardsContainer;