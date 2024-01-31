import React from "react";
import styled from "styled-components";

const Wrapper = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  min-width: 1440px;
  position: relative;
`;
export default Wrapper;
