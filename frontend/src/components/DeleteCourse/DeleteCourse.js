import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import Button from "../../styles/AdmForms/Button";
import Input from "../../styles/AdmForms/Input";
import Title from "../../styles/AdmForms/Title";
import ResponseModal from "../ResponseModal/ResponseModal";

const DeleteButton = styled(Button)`
  background-color: #ad402f;
  color: #fff;
  &:hover {
    background-color: #d64f3a;
    box-shadow: 0 0 6px #d64f3a;
  }
`;

function DeleteCourse() {
  const [courseValue, setCourseValue] = useState("");

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

    const courseValueTreated = courseValue.trim();

    try {
      const response = await axios.delete(
        `http://localhost:3001/cursos/${courseValueTreated}`
      );
      setStatusCode(response.status);
      setModalMsg(response.data);
      setShowModal(true);
    } catch (err) {
      setStatusCode(err.response.status);
      setModalMsg(err.response.data);
      setShowModal(true);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <Title>Excluir Curso</Title>
      <Input
        type="text"
        id="deleteInput"
        placeholder="Nome do curso"
        onChange={(e) => {
          setCourseValue(e.target.value);
        }}
        required
      />
      <DeleteButton>Deletar</DeleteButton>
      {showModal && (
        <ResponseModal
          errorMsg={modalMsg}
          modalHandler={modalHandler}
          statusCode={statusCode}
        />
      )}
    </form>
  );
}

export default DeleteCourse;
