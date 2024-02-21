import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: hsla(0, 0%, 7%, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled.div`
  background: #ffffff;
  border-radius: 28px;
  max-width: 500px;

  padding: 3rem 2rem;
`;

const ImageWrapper = styled.div`
  margin-block: -10rem 1.5rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CloseBtn = styled.button`
  font-size: 1rem;
  font-weight: bold;
  align-self: flex-end;
  width: 5rem;
  background: transparent;
  border: 2px solid #121212;
  border-radius: 4px;
  box-shadow: -5px 5px 0px 0px rgba(0, 0, 0, 0.25);
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  transition: 250ms;
  cursor: pointer;

  &:hover {
    transform: translate(-5px, 5px);
    box-shadow: 0px 0px rgba(0, 0, 0, 0.25);
  }
`;

const DirectlyEmail = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
  @media (max-width: 450px) {
    font-size: 1rem;
  }
  & p {
    @media (max-width: 768px) {
      width: fit-content;
    }
  }
`;

const Email = styled.div`
  font-size: 2rem;
  font-weight: bold;
  width: fit-content;
  border-bottom: 3px solid #121212;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 450px) {
    font-size: 1.25rem;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

const CopyRight = styled.div`
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 450px) {
    font-size: 0.675rem;
  }
`;
export {
  Modal,
  ModalCard,
  ImageWrapper,
  ContentWrapper,
  DirectlyEmail,
  Email,
  CloseBtn,
  Footer,
  CopyRight,
};
