import styled from "styled-components";

const SectionTitle = styled.div`
  color: #121212;
  margin-bottom: 4rem;

  &.white-text {
    color: #ffffff;
  }
`;
const TextTitle = styled.h2`
  font-size: 3rem;
  &.right {
    text-align: end;
  }
`;

const BorderText = styled.span`
  color: #ffffff;
  -webkit-text-stroke: 3px #121212;
`;

export { SectionTitle, TextTitle, BorderText };
