import { useState } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PageWrapper from "../styles/LoginRegisterForgot/PageWrapper";
import TitleWrapper from "../styles/LoginRegisterForgot/TitleWrapper";
import Title from "../styles/LoginRegisterForgot/Title";
import FormWrapper from "../styles/LoginRegisterForgot/FormWrapper";
import Input from "../styles/LoginRegisterForgot/Input";
import Button from "../styles/LoginRegisterForgot/Button";
import BottomText from "../styles/LoginRegisterForgot/BottomText";
import emailLogo from "../images/email.svg";
import passwordLogo from "../images/password.svg";
import { LinkAnimated } from "../styles/LoginRegisterForgot/LinkAnimated";
import ResponseModal from "../components/ResponseModal/ResponseModal";
import Logo from "../images/logoLogin.png";

const LogoStyle = styled.img`
  width: 170px;
`

function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [statusCode, setStatusCode] = useState(null)
  const [modalMsg, setModalMsg] = useState("");
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const modalHandler = () => {
    if (!showModal) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/login", {
        email: userEmail,
        password: userPassword,
      });

      const token = response.data.token;
      const decodedToken = jwt.decode(token);

      localStorage.setItem("token", token);

      if (decodedToken.user_type === "administrador") {
        navigate("/administrador");
      } else {
        navigate("/user");
      }
    } catch (err) {
      setStatusCode(err.response.status);
      setModalMsg(err.response.data);
      setShowModal(true);
    }
  };

  return (
    <PageWrapper>
      <div className="container row">
        <TitleWrapper className="col-lg-6 col-md-6">
          <LogoStyle src={Logo} />
          <Title>Faça seu login na plataforma</Title>
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
                imgUrl={passwordLogo}
                type="password"
                placeholder="Senha"
                required
                onChange={(e) => {
                  setUserPassword(e.target.value);
                }}
              />
            </div>
            <Button type="submit">Entrar</Button>
          </form>

          <BottomText>
            <LinkAnimated to={"/esqueci-a-senha"}>
              Esqueci minha senha
            </LinkAnimated>
            <p>
              Não tem um conta?{" "}
              <LinkAnimated to={"/cadastro"}>Registre-se</LinkAnimated>
            </p>
          </BottomText>
        </FormWrapper>
      </div>
      {showModal && (
        <ResponseModal
          errorMsg={modalMsg}
          modalHandler={modalHandler}
          statusCode={statusCode}
        />
      )}
    </PageWrapper>
  );
}

export default Login;
