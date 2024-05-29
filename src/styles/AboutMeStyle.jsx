import styled from "styled-components";

const AboutmeContent = styled.div`
  display: flex;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 2rem;
  }
`;

const AboutmeDescription = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 870px;

  & p {
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const ProfileWrapper = styled.div`
  flex: 1;
  overflow: hidden;

  & img {
    max-width: 350px;
    aspect-ratio: 1;
    border: 3px solid #ffffff;
    border-radius: 100%;
    margin: 0 auto;
    object-fit: cover;
    @media (max-width: 768px) {
      max-width: 250px;
    }
  }
  @media (max-width: 768px) {
    align-self: center;
  }
`;

export { AboutmeContent, AboutmeDescription, ProfileWrapper };
