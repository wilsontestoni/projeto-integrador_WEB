import styled from "styled-components";
import { ButtonSignupStyle } from "../Header/MainNavBar";
import { Link } from "react-router-dom";
import x from "../../images/x.svg";

export const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 1000;
  display: flex;
`;
export const ModalContainer = styled.div`
  background-color: #faf9fe;
  color: #000;
  width: 900px;
  margin: auto;
  border-radius: 20px;

  @media (max-width: 950px) {
    width: 600px;
  }

  @media (max-width: 720px) {
    width: 400px;
  }

  @media (max-width: 420px) {
    width: 90%;
  }
`;
export const ModalHeader = styled.header`
  border-radius: 20px 20px 0 0;
  background-color: #375573;
  color: white;
  padding: 10px 30px;
  display: flex;
  justify-content: flex-end;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;

  &:focus {
    border: none;
    outline: none;
  }
`;
export const ModalBody = styled.main`
  padding: 20px 30px;
  align-items: center;

  & h1 {
    font-weight: bold;
    font-size: 30px;
    margin: 0;
  }

  & h2 {
    font-size: 20px;
    font-weight: bold;
  }

  & h3 {
    font-size: 17px;
    font-weight: bold;
  }

  & p {
    font-size: 16px;
    margin: 6px 0;
  }
`;
const TitleInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  & span {
    font-weight: bold;
  }

  @media (max-width: 720px) {
    flex-direction: column;
    text-align: center;
    & span {
      margin-top: 12px;
    }
  }
`;

const AboutContainer = styled.div`
  margin-bottom: 16px;
  & p {
    text-indent: 22px;
  }
`;

const LinkContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignupButton = styled(ButtonSignupStyle)`
  padding: 4px 10px;
  border-radius: 5px 5px 5px 5px !important;
  &:hover {
    text-decoration: none;
  }
`;

const LoginButton = styled(Link)`
  color: #000;
  background-color: #badeff;
  padding: 4px 10px;
  boder: none;
  border-radius: 5px;
  box-shadow: 0px 0px 1px 0 #b5b5b5;
  &:hover {
    text-decoration: none;
    color: #000;
    background-color: #a0bfdb;
    transition: 0.3s;
  }
`;

export const NexusLink = styled.a`
  color: #d6a100;
  &:hover {
    color: #fabb00;
    text-decoration: none;
  }
`;

function CourseModal(props) {
  const handleClick = (event) => {
    event.stopPropagation();
  };

  return (
    <Modal onClick={handleClick}>
      <ModalContainer>
        <ModalHeader>
          <CloseButton
            onClick={() => {
              props.modalHandler();
            }}
          >
            <img src={x} alt="close"></img>
          </CloseButton>
        </ModalHeader>
        <ModalBody>
          <TitleInformation>
            <h1>{props.title}</h1>
            <span>Carga horária: {props.courseDuration}hrs</span>
          </TitleInformation>

          <AboutContainer>
            <h2>Sobre:</h2>
            <p>{props.description}</p>
          </AboutContainer>

          <div>
            <h3>Benefícios:</h3>
            <ul>
              <li>Certificado Reconhecido.</li>
              <li>Suporte online de Segunda/Sábado das 8 até as 18 horas.</li>
              <li>Aulas de qualidade com aprendizado garantido.</li>
              <li>Estude no seu ritmo e revise quantas vezes quiser.</li>
            </ul>
          </div>

          <footer>
            <h3>Cronograma inicial:</h3>
            <ol>
              <li>{props.courseClass1}</li>
              <li>{props.courseClass2}</li>
              <li>{props.courseClass3}</li>
            </ol>
            <p>
              Para ter o cronograma todo, acesse o site{" "}
              <NexusLink href={props.courseLink}>Nexus</NexusLink>
            </p>
          </footer>

          <LinkContainer>
            <p>
              <strong>Gostou do curso</strong>? Cadastre-se para ter acesso ao
              curso gratuitamente!
            </p>
            <SignupButton to={"/cadastro"}>Cadastrar</SignupButton>
            <p>
              <strong>Já é cadastrado</strong>? Faça o login para ter acesso ao
              seu código!
            </p>
            <LoginButton to={"/login"}>Login</LoginButton>
          </LinkContainer>
        </ModalBody>
      </ModalContainer>
    </Modal>
  );
}

export default CourseModal;
