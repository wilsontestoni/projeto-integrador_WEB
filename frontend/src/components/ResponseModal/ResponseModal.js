import styled from "styled-components";
import x from "../../images/x.svg";
import {
  Modal,
  ModalContainer,
  ModalHeader,
  CloseButton,
  ModalBody,
} from "../CourseModal/CourseModal";

const ModalHeaderColorResponse = styled(ModalHeader)`
  background-color: ${(props) =>
    props.statusCode >= 200 && props.statusCode <= 299 ? "green" : "red"};
`;
const ModalBodyError = styled(ModalBody)`
  width: 100%;
  & p {
    font-size: 18px;
    text-align: center;
    width: 100%;
  }
`;

function ResponseModal(props) {
  const handleClick = (event) => {
    event.stopPropagation();
  };

  return (
    <Modal onClick={handleClick}>
      {console.log(props.statusCode)}
      <ModalContainer>
        <ModalHeaderColorResponse statusCode={props.statusCode}>
          <CloseButton
            onClick={() => {
              props.modalHandler();
            }}
          >
            <img src={x} alt="close"></img>
          </CloseButton>
        </ModalHeaderColorResponse>
        <ModalBodyError>
          <p>{props.errorMsg}</p>
        </ModalBodyError>
      </ModalContainer>
    </Modal>
  );
}

export default ResponseModal;
