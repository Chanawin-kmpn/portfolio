import styled, { keyframes } from "styled-components";

const GreetingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  max-width: fit-content;
  margin-top: 5.6rem;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    padding-inline: 3rem;
  }
`;

const Greeting = styled.h1`
  font-size: 4rem;
  line-height: 5.3125rem; /* 132.813% */
  letter-spacing: 0.08rem;
  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Role = styled.span`
  color: #ffffff;
  -webkit-text-stroke: 3px #121212;
  border-bottom: 8px solid #121212;
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(45deg);
    }
`;

const Rotate = styled.span`
  display: inline-block;
  animation: ${rotate} 1s linear alternate infinite;
`;

const GreetingDescription = styled.div`
  max-width: 45rem;
  margin-block: 2rem 4rem;

  .description {
    font-size: 2rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

const DownloadButton = styled.button`
  display: block;
  width: 12.5rem;
  background-color: #ffffff;
  border: 2px solid #121212;
  border-radius: 10px;
  box-shadow: -5px 5px 0px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 13rem;
  padding: 0.8rem;
  cursor: pointer;
  transition: 250ms;

  &:hover {
    transform: translate(-5px, 5px);
    box-shadow: 0px 0px rgba(0, 0, 0, 0.25);
  }

  .download-link {
    font-family: inherit;
    color: #121212;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
  }

  & span img {
    max-width: 2rem;
  }
`;

export {
  GreetingContent,
  Greeting,
  Role,
  Rotate,
  GreetingDescription,
  DownloadButton,
};
