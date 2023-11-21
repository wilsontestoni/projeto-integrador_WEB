import styled, { keyframes } from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CoursesLinks from "../components/CoursesLinks/CoursesLinks";
import Header from "../components/Header/MainNavBar";
import CardsContainer from "../styles/CoursesPage/CardsContainer";
import Container from "../styles/CoursesPage/Container";
import MainTitle from "../styles/CoursesPage/MainTitle";
import CourseCard from "../components/CourseCard/CourseCard";

const MainTitleCourse = styled(MainTitle)`
  font-size: 43px;
  margin-top: 70px; 
  margin-bottom: 60px;
`

const titulos = {
  administrativos: "Administrativos",
  "educacao-e-saude": "de Educação e Saúde",
  idiomas: "de Idiomas",
  informatica: "de Informática",
  preparatorios: "Preparatórios",
  diversos: "Diversos",
};

const fadeIn = keyframes`
 from {
   opacity: 0;
 }
 to {
   opacity: 1;
 }
`;

const CardsContainerFadeIn = styled(CardsContainer)`
  animation: ${fadeIn} 0.6s ease-in-out;
`;

function Courses() {
  const { categoria } = useParams();
  const [courses, setCourses] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/cursos/${categoria}`
        );
        setCourses(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    getCourses();
  }, [categoria]);

  const titulo = titulos[categoria];

  return (
    <Container class="container-fluid">
      <Header />
      <MainTitleCourse>Cursos {titulo}</MainTitleCourse>
      <CoursesLinks />
      <TransitionGroup key={categoria}>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <CardsContainerFadeIn className="row">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                courseImg={`http://localhost:3001${course.image_url}`}
                courseName={course.course_name}
                description={course.course_description}
                courseDuration={course.course_duration}
                courseLink={course.course_link}
                courseClass1={course.course_class1}
                courseClass2={course.course_class2}
                courseClass3={course.course_class3}
              />
            ))}
          </CardsContainerFadeIn>
        </CSSTransition>
      </TransitionGroup>
    </Container>
  );
}

export default Courses;
