import React, { useState } from "react";
import LogoImage from "../../assets/images/ck-logo.webp";
import { Section } from "../../styles/SectionStyle";
import {
  Aside,
  ContactContainer,
  ContactDescription,
  ContactTitle,
  FirstInput,
  FormWrapper,
  Input,
  InputWrapper,
  Label,
  SubmitBtn,
  Textarea,
} from "../../styles/ContactStyle";
import { Line } from "../../styles/SocialLinkStyle";
import SocialLink from "../SocialLink";
import { Logo } from "../../styles/NavStyles";
import FormResultModal from "../FormResultModal";
import {
  DirectlyEmail,
  Email,
  Footer,
} from "../../styles/FormResultModalStyle";
const myAccessKey = "71835553-e96d-4159-b9fe-34a2837b4275";
const Contact = () => {
  const [result, setResult] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "71835553-e96d-4159-b9fe-34a2837b4275");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      setIsOpen(true);
    } else {
      console.log("Error", res);
      setResult(res.message);
      setIsOpen(false);
    }
  };
  return (
    <Section className="border-line">
      <ContactContainer>
        <div>
          <div>
            <ContactTitle>Let’s build something together</ContactTitle>
            <ContactDescription>
              If you’re looking for a developer feel free to contact me.
            </ContactDescription>
          </div>
          <FormWrapper onSubmit={onSubmit}>
            <input type="hidden" name="access_key" value={myAccessKey} />
            <FirstInput>
              <InputWrapper>
                <Label htmlFor="name">Full name:</Label>
                <Input
                  type="text"
                  name="name"
                  aria-label="full-name"
                  required
                />
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="email">Email:</Label>
                <Input type="email" name="email" aria-label="email" required />
              </InputWrapper>
            </FirstInput>
            <InputWrapper>
              <Label htmlFor="message">Message:</Label>
              <Textarea
                name="message"
                rows="10"
                aria-label="textarea"
                required
              ></Textarea>
            </InputWrapper>
            {/* <div className="h-captcha" data-captcha="true"></div> */}
            <SubmitBtn
              aria-label="submit-button"
              className="gradient-btn"
              type="submit"
            >
              Submit form!
            </SubmitBtn>
          </FormWrapper>
          {isOpen && <FormResultModal setIsOpen={setIsOpen} />}
          <div>
            <DirectlyEmail>
              <p>Or you can send me a message directly to this email. </p>
              <Line />
            </DirectlyEmail>
            <Email>
              <p>pchanawin@gmail.com</p>
            </Email>
          </div>
        </div>
        <Aside>
          <SocialLink classValue="column" />
        </Aside>
      </ContactContainer>
      <Footer>
        <Logo>
          <img src={LogoImage} alt="ck-logo" />
        </Logo>
        <div>&copy; 2024 Chanawin</div>
      </Footer>
    </Section>
  );
};

export default Contact;
