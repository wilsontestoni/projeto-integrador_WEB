import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import Title from "../../styles/AdmForms/Title";
import Input from "../../styles/AdmForms/Input";
import Button from "../../styles/AdmForms/Button";
import { SelectInput, LabelSelect, SelectDiv } from "../../styles/AdmForms/SelectInput"
import ResponseModal from "../ResponseModal/ResponseModal";

const UpdateButton = styled(Button)`
  background-color: #D6CA78;
  &:hover {
    background-color: #FAEC8B;
    box-shadow: 0 0 6px #FAEC8B;
  }
`

const SelectInputAjusted = styled(SelectInput)` 
  padding: 5px;

  @media (max-width: 1410px) {
    margin-left: 0; 
  }
` 

const InputAjusted = styled(Input)`
  margin-bottom: 15px;
`

function UpdateCourse() {

  const [courseName, setCourseName] = useState("");
  const [columnToUpdate, setColumnToUpdate] = useState("");
  const [newValue, setNewValue] = useState("");

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedCourse = {
      [columnToUpdate]: newValue,
    };

    try {
      const response = await axios.put(
        `http://localhost:3001/cursos/${courseName}`,
        updatedCourse
      );
      setStatusCode(response.status);
      setModalMsg(response.data);
      setShowModal(true);
      console.log(statusCode)
    } catch (err) {
      setStatusCode(err.response.status);
      setModalMsg(err.response.data);
      setShowModal(true);
      console.log(statusCode)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Title>Alterar Curso</Title>

      <InputAjusted
        type="text"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        placeholder="Nome do curso"
      />

      <SelectDiv>
        <LabelSelect>
          O que você deseja mudar:
          <SelectInputAjusted
            value={columnToUpdate}
            onChange={(e) => setColumnToUpdate(e.target.value)}
          >
            <option value="">Selecione uma coluna</option>
            <option value="course_name">Nome do curso</option>
            <option value="course_link">Link do curso</option>
            <option value="course_description">Descrição do curso</option>
            <option value="course_duration">Duração do curso</option>
            <option value="course_class1">Aula 1</option>
            <option value="course_class2">Aula 2</option>
            <option value="course_class3">Aula 3</option>
          </SelectInputAjusted>
        </LabelSelect>
      </SelectDiv>

      <Input
        type="text"
        value={newValue}
        onChange={(e) => setNewValue(e.target.value)}
        placeholder="Novo contéudo"
      />
      <UpdateButton type="submit">Atualizar</UpdateButton>
      {showModal && (
        <ResponseModal errorMsg={modalMsg} modalHandler={modalHandler} statusCode={statusCode}/>
      )}
    </form>
  );
}

export default UpdateCourse;
