import styled from "styled-components";

const Button = styled.button`
  height: 40px;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: #25D9A3;
  color: #000;
  margin-top: 10px;

  &:hover {
    transition: all ease 0.2s;
    background-color: #2BFDBE;
    box-shadow: 0px 0px 6px #2BFDBE;
  }
`;

export default Button;

