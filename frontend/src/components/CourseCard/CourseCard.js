import { useState } from "react";
import CourseModal from "../CourseModal/CourseModal";
import styled from "styled-components";

const CardContainer = styled.div`
  margin-bottom: 50px;
  width: 100%;

  @media (max-width: 575px) {
    width: 300px;
  }
`;

const Card = styled.div`
  cursor: pointer;
  border: none;
  border-radius: 10px;
  transition: all 0.3s ease;
  &:hover {
    border: 1px solid rgba(200, 200, 200, 0.3);
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(200, 200, 200, 0.3);
  }
`;

const Img = styled.img`
  border-radius: 10px 10px 0 0;
  width: 100%;
`;
const CardBodyText = styled.div`
  padding: 7px;
  text-align: center;
  line-height: 1.3;
`;

function CourseCard(props) {
  const [showModal, setShowModal] = useState(false);

  const modalHandler = () => {
    if (!showModal) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  return (
    <CardContainer
      onClick={modalHandler}
      className=" col-xl-3 col-lg-3 col-md-4 col-sm-6"
    >
      <Card className="card">
        <Img
          className="card-img-top"
          src={props.courseImg}
          alt={props.courseName}
        />
        <CardBodyText>
          <p className="card-text">{props.courseName}</p>
        </CardBodyText>
      </Card>
      {showModal && (
        <CourseModal
          modalHandler={modalHandler}
          title={props.courseName}
          description={props.description}
          courseDuration={props.courseDuration}
          courseLink={props.courseLink}
          courseClass1={props.courseClass1}
          courseClass2={props.courseClass2}
          courseClass3={props.courseClass3}
        />
      )}
    </CardContainer>
  );
}

export default CourseCard;
