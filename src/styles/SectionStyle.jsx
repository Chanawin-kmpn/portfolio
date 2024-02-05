import styled from "styled-components";

const Section = styled.section`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
  padding: 4rem;

  &.padding-none {
    padding: 0;
  }

  &.border-line {
    border-block: 1px solid #121212;
  }
`;

export { Section };
