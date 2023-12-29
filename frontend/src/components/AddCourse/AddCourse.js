import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import ResponseModal from "../ResponseModal/ResponseModal";
import Input from "../../styles/AdmForms/Input";
import Button from "../../styles/AdmForms/Button";
import Title from "../../styles/AdmForms/Title";
import {
  SelectInput,
  LabelSelect,
  SelectDiv,
} from "../../styles/AdmForms/SelectInput";

const CreateCourse = styled(Title)`
  font-size: 34px;
`;

const FileInputDisplay = styled.input`
  display: none;
`;

const HackStyleFile = styled.label`
  padding: 2px 25px;
  margin-left: 10px;
  font-size: 16px;
  background-color: #fff;
  color: #000;
  border: none;
  outline: none;
  border-radius: 5px;
  margin-bottom: -4px;
  &:hover {
    transition: all ease 0.2s;
    background-color: #dbdbdb;
    box-shadow: 0px 0px 0px #2bfdbe;
  }

  @media (max-width: 520px) {
    margin-left: 0;
  }
`;

function AddCourse() {
  const [course, setCourse] = useState({
    course_category: "",
    course_name: "",
    course_link: "",
    image_url: null,
    course_description: "",
    course_duration: "",
    course_class1: "",
    course_class2: "",
    course_class3: "",
  });

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

  const handleChange = (event) => {
    setCourse({ ...course, [event.target.name]: event.target.value });
  };

  const handleImageChange = (event) => {
    setCourse({ ...course, image_url: event.target.files[0] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    Object.keys(course).forEach((key) => {
      formData.append(key, course[key]);
    });

    try {
      const response = await axios.post(
        "http://localhost:3001/cursos/criar",
        formData
      );
      setModalMsg(response.data);
      setStatusCode(response.status);
      setShowModal(true);
    } catch (err) {
      setModalMsg(err.response.data);
      setStatusCode(err.response.status);
      setShowModal(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CreateCourse>Criar Curso</CreateCourse>
      <SelectDiv>
        <LabelSelect>
          Envie a imagem do curso:
          <HackStyleFile>
            Enviar Foto
            <FileInputDisplay
              type="file"
              id="test"
              name="image_url"
              onChange={handleImageChange}
              required
            />
          </HackStyleFile>
        </LabelSelect>
      </SelectDiv>
      <SelectDiv>
        <LabelSelect>
          Categoria:
          <SelectInput
            name="course_category"
            value={course.course_category}
            onChange={handleChange}
            required
          >
            <option value="">Selecione uma categoria</option>
            <option value="administrativos">Administrativos</option>
            <option value="educacao-e-saude">Educação e Saúde</option>
            <option value="idiomas">Idiomas</option>
            <option value="informatica">Informática</option>
            <option value="preparatorios">Preparatórios</option>
            <option value="diversos">Diversos</option>
          </SelectInput>
        </LabelSelect>
      </SelectDiv>
      <Input
        name="course_name"
        value={course.course_name}
        onChange={handleChange}
        placeholder="Nome do curso"
        required
      />
      <Input
        name="course_link"
        value={course.course_link}
        onChange={handleChange}
        placeholder="Link oficial do curso"
        required
      />
      <Input
        name="course_description"
        value={course.course_description}
        onChange={handleChange}
        placeholder="Descrição do curso"
        required
      />
      <Input
        name="course_duration"
        value={course.course_duration}
        onChange={handleChange}
        placeholder="Duração do curso"
      />
      <Input
        name="course_class1"
        value={course.course_class1}
        onChange={handleChange}
        placeholder="Primeira aula"
        required
      />
      <Input
        name="course_class2"
        value={course.course_class2}
        onChange={handleChange}
        placeholder="Segunda aula"
        required
      />
      <Input
        name="course_class3"
        value={course.course_class3}
        onChange={handleChange}
        placeholder="Terceira aula"
        required
      />
      <Button type="submit">Enviar</Button>
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

export default AddCourse;
