import React from "react";
import styled, { keyframes } from "styled-components";

const BGLeft = () => {
  const bars = Array.from({ length: 12 }, (_, index) => ({
    id: index,
    width: Math.floor(Math.random() * 350) + 50,
    duration: Math.random() * 2 + 2,
  }));
  return (
    <BarWrapper>
      {bars.map((bar) => (
        <Bar key={bar.id} width={bar.width} duration={bar.duration} />
      ))}
    </BarWrapper>
  );
};

const BarWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  @media (max-width: 768px) {
    display: none;
  }
`;
const slide = keyframes`
    from {
      width: 0;
    }
`;

const Bar = styled.div`
  width: ${(props) => props.width}px;
  height: 85px;
  background-color: #121212;
  animation: ${slide} ${(props) => props.duration}s linear infinite alternate;
`;

export default BGLeft;
