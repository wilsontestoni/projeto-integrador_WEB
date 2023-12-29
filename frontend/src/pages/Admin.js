import React from "react";
import jwt from "jsonwebtoken";
import styled from "styled-components";
import Container from "../styles/CoursesPage/Container";
import { Main } from "./User";
import DeleteCourse from "../components/DeleteCourse/DeleteCourse";
import MainTitle from "../styles/CoursesPage/MainTitle";
import UsersHeader from "../components/UsersHeader/UsersHeader";
import AddCourse from "../components/AddCourse/AddCourse";
import UpdateCourse from "../components/UpdateCourse/UpdateCourse";

const FormWrapper = styled.div`
  width: 70%;
  min-width: 350px;
  padding: 30px;
  margin: auto;
  margin-bottom: 40px;
  border-radius: 20px;
`;

const LittleFormsWrapper = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 50px;

  @media (max-width: 500px) {
    min-width: 350px;
    margin: auto;
  }
`;

const LittleFormWrapper = styled.div`
  padding: 30px;
  border-radius: 20px;
`;

const AnimatedLine = styled.div`
  height: 7px;
  width: 80%;
  border-radius: 2px;
  margin: auto;
  margin-top: 60px;
  background: linear-gradient(185deg, #badeff, #25d9a3);
  background-size: 200% 200%;
  animation: gradient 0.2s ease infinite;
`;

function Admin() {
  const token = localStorage.getItem("token");
  const data = jwt.decode(token);
  const username = data.name;

  return (
    <Container>
      <UsersHeader />
      <Main>
        <MainTitle>Bem-vindo, {username}!</MainTitle>
        <FormWrapper>
          <AddCourse />
        </FormWrapper>

        <AnimatedLine />

        <LittleFormsWrapper className="row">
          <LittleFormWrapper className="col-xl-6 col-lg-6 col-md-6">
            <DeleteCourse />
          </LittleFormWrapper>
          <LittleFormWrapper className="col-xl-6 col-lg-6 col-md-6">
            <UpdateCourse />
          </LittleFormWrapper>
        </LittleFormsWrapper>
      </Main>
    </Container>
  );
}

export default Admin;
