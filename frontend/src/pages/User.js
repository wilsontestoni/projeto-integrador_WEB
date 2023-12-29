import jwt from "jsonwebtoken";
import styled from "styled-components";
import Container from "../styles/CoursesPage/Container";
import UsersHeader from "../components/UsersHeader/UsersHeader";
import MainTitle from "../styles/CoursesPage/MainTitle";

import { NexusLink } from "../components/CourseModal/CourseModal";
import NexusVideo from "../components/NexusVideo/NexusVideo";

const MainContent = styled.div`
  width: 80%;
  margin: auto;

  & h3 {
    text-align: center;
    margin: 60px;
    font-size: 38px;
  }

  & h4 {
    text-align: center;
    font-size: 26px;
    margin-top: 60px;
    margin-bottom: 50px;
  }
`;

export const Main = styled.main`
  color: #fff;
  h1 {
    text-align: center;
  }
`;

const ContainerAcessCode = styled.div`
  width: 100%;
  padding: 6px;
  background-color: #10263b;
  text-align: center;
  font-size: 24px;
  color: #fff;
  margin-bottom: 50px;
  padding: 10px 0px;

  & h2 {
    font-size: 26px;
    margin: 0;
  }
`;

const StyledCode = styled.strong`
  color: #2bfdbe;
`;

const BackGround = styled.div`
  width: 100%;
  padding: 30px;
  border-radius: 10px;
  background-color: #10263b;
`;

const Warning = styled.p`
  text-align: center;
  color: #D64F3A;
`

function User() {
  const token = localStorage.getItem("token");
  const data = jwt.decode(token);
  const userName = data.name;

  return (
    <Container>
      <UsersHeader />
      <Main>
        <MainTitle>Bem-vindo, {userName}!</MainTitle>

        <ContainerAcessCode>
          <h2>
            Código de acesso aos cursos: <StyledCode>#######</StyledCode>
          </h2>
        </ContainerAcessCode>

        <MainContent>
          <h3>Como funciona?</h3>
          <BackGround>
            <p>
              <strong>
                Para ter acesso ao curso gratuito siga os seguintes passos:
              </strong>
            </p>
            <ol>
              <li>
                Acesse o link{" "}
                <NexusLink href="https://educanexus.com/loja_virtual/index.php">
                  Educanexus
                </NexusLink>
              </li>
              <li>
                Escolha o curso de sua preferência e clique em "Matricule-se"
              </li>
              <li>Clique em "Comprar agora"</li>
              <li>
                No campo "Digite o código do seu cupom" insira o cupom{" "}
                <StyledCode>#######</StyledCode>
              </li>
              <li>
                Somente após a confirmação de que o cupom foi aplicado preencha
                todos os campos com os dados pessoais (Importante para não gerar
                cobranças indevidas!)
              </li>
              <li>Clique em "finalizar matrícula"</li>
              <li>Anote o seu login e senha de acesso a plataforma de aulas</li>
              <li>Acesse a plataforma através do link</li>
            </ol>
          </BackGround>
          <h4>
            Caso ainda tenha dúvidas de como usar código, veja o vídeo do
            passo-a-passo.
          </h4>
          <Warning>**Vídeo original retirado por mostrar o código promocional**</Warning>
        </MainContent>
        <NexusVideo />
      </Main>
    </Container>
  );
}

export default User;
