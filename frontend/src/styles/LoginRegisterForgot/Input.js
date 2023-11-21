import styled from "styled-components";

const InputLogin = styled.input`
  height: 40px;
  width: 100%;
  margin-top: 15px;
  border: none;
  border-radius: 5px;
  padding-left: 48px;
  background: #fff ${(props) => `url(${props.imgUrl})`} no-repeat 17px center;
`


export default InputLogin;