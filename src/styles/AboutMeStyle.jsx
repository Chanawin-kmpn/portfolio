import styled from "styled-components";

const AboutmeContent = styled.div`
  display: flex;
  align-items: flex-start;
`;

const AboutmeDescription = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 870px;
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
  }
`;

export { AboutmeContent, AboutmeDescription, ProfileWrapper };
