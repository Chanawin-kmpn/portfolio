import styled from "styled-components";

const Container = styled.section`
  position: relative;
  height: min-content;
  min-height: 63.75rem;
  &.black-bg {
    background-color: #121212;
  }

  &.small-height {
    min-height: fit-content;
  }
`;
export { Container };
