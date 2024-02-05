import styled from "styled-components";
import { gradientAnimation, gradientBg } from "./GradientBtn";

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContactTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const ContactDescription = styled.p`
  font-size: 2rem;
  max-width: 55.4375rem;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
  margin-top: 4rem;
`;

const FirstInput = styled.div`
  display: flex;
  gap: 2rem;
  & * {
    flex: 1;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  font-size: 1rem;
  border: 2px solid #121212;
  border-radius: 4px;
  padding: 0.8rem 0.5rem;
`;

const Textarea = styled.textarea`
  font-size: 1rem;
  border: 2px solid #121212;
  border-radius: 4px;
  padding: 1rem;
`;

const SubmitBtn = styled.button`
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
  align-self: flex-start;
  ${gradientBg}
  border-color: transparent;
  animation: ${gradientAnimation} 10s ease-in-out infinite;
  cursor: pointer;
`;

const Aside = styled.aside`
  align-self: flex-end;
`;

export {
  ContactContainer,
  ContactTitle,
  ContactDescription,
  FormWrapper,
  FirstInput,
  InputWrapper,
  Label,
  Input,
  Textarea,
  SubmitBtn,
  Aside,
};
