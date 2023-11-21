import styled from "styled-components";
import { Link } from "react-router-dom";

const LinksWrapper = styled.section`
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 5px;
`;

const ButtonLink = styled(Link)`
  background-color: #badeff;
  padding: 4px 10px;
  border: none;
  box-shadow: 1px 1px 10px #badeff;
  border-radius: 10px;
  text-decoration: none !important;
  margin-right: 7px;
  margin-bottom: 10px;
  color: #000;
  &: hover {
    transition: 0.3s;
    background-color: #2bfdbe;
    color: #000;
    box-shadow: 1px 1px 10px #2bfdbe;
  }
`;

function CoursesLinks() {
  return (
    <LinksWrapper>
      <ButtonLink to={"/cursos/administrativos"}>Administrativo</ButtonLink>
      <ButtonLink to={"/cursos/educacao-e-saude"}>Educação e Saude</ButtonLink>
      <ButtonLink to={"/cursos/idiomas"}>Idiomas</ButtonLink>
      <ButtonLink to={"/cursos/informatica"}>Informática</ButtonLink>
      <ButtonLink to={"/cursos/preparatorios"}>Preparatórios</ButtonLink>
      <ButtonLink to={"/cursos/diversos"}>Diversas Áreas</ButtonLink>
    </LinksWrapper>
  );
}

export default CoursesLinks;
