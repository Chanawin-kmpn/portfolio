import React from "react";
import EnthusiasticImage from "../assets/images/enthusiastic-illustrator.svg";
import {
  CloseBtn,
  ContentWrapper,
  ImageWrapper,
  Modal,
  ModalCard,
} from "../styles/FormResultModalStyle";

const FormResultModal = ({ setIsOpen }) => {
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <Modal>
      <ModalCard>
        <ImageWrapper>
          <img src={EnthusiasticImage} alt="enthusiastic-image" />
        </ImageWrapper>
        <ContentWrapper>
          <p>
            Thank you for submitting form. I will reply as soon as possible.
          </p>
          <CloseBtn onClick={() => closeModal()}>Close</CloseBtn>
        </ContentWrapper>
      </ModalCard>
    </Modal>
  );
};

export default FormResultModal;
