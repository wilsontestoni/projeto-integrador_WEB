import { useState } from "react";
import axios from "axios";
import PageWrapper from "../styles/LoginRegisterForgot/PageWrapper";
import TitleWrapper from "../styles/LoginRegisterForgot/TitleWrapper";
import Title from "../styles/LoginRegisterForgot/Title";
import FormWrapper from "../styles/LoginRegisterForgot/FormWrapper";
import Input from "../styles/LoginRegisterForgot/Input";
import Button from "../styles/LoginRegisterForgot/Button";
import BottomText from "../styles/LoginRegisterForgot/BottomText";
import { LinkAnimated } from "../styles/LoginRegisterForgot/LinkAnimated";
import emailLogo from "../images/email.svg";
import passwordLogo from "../images/password.svg";
import nameLogo from "../images/nome.svg";
import ResponseModal from "../components/ResponseModal/ResponseModal";
import Logo from "../images/logoLogin.png"
import styled from "styled-components";

const LogoStyle = styled.img`
  width: 170px;
`

function Signup() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");

  const [modalMsg, setModalMsg] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [statusCode, setStatusCode] = useState(null);

  const modalHandler = () => {
    if (!showModal) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (userPassword !== confirmPassword) {
      setModalMsg("As senhas não coincidem. Por favor, tente novamente.");
      setShowModal(true);
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/cadastrar", {
        name: userName,
        email: userEmail,
        password: userPassword,
      });
      
      setModalMsg(response.data);
      setShowModal(true);
      setStatusCode(response.status);
      console.log(statusCode);
    } catch (err) {
      setModalMsg(err.response.data);
      setShowModal(true);
      setStatusCode(err.response.status)
    }
  };

  return (
    <PageWrapper>
      <div className="container row">
        <TitleWrapper className="col-lg-6 col-md-6 order-lg-2 order-md-2">
          <LogoStyle src={Logo} />
          <Title>Registre-se para ter acesso aos cursos gratuitamente</Title>
          <BottomText>
            <LinkAnimated to={"/login"}>Voltar para login</LinkAnimated>
          </BottomText>
        </TitleWrapper>

        <FormWrapper className="col-lg-6 col-md-6">
          <form onSubmit={submitHandler}>
            <div>
              <Input
                imgUrl={emailLogo}
                type="email"
                placeholder="E-mail"
                required
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <Input
                imgUrl={nameLogo}
                type="text"
                placeholder="Seu nome"
                required
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>
            <div>
              <Input
                imgUrl={passwordLogo}
                type="password"
                placeholder="Sua senha"
                required
                onChange={(e) => {
                  setUserPassword(e.target.value);
                }}
              />
            </div>
            <div>
              <Input
                imgUrl={passwordLogo}
                type="password"
                placeholder="Confirme sua senha"
                required
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </div>
            <Button type="submit">CADASTRAR</Button>
          </form>
        </FormWrapper>
      </div>
      {showModal && (
        <ResponseModal errorMsg={modalMsg} modalHandler={modalHandler} statusCode={statusCode}/>
      )}
    </PageWrapper>
  );
}

export default Signup;
