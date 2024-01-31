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
  position: fixed;
  top: 0;
  z-index: -1;
`;
const slide = keyframes`
    from {
        width: 0;
    }

    to {
        /* width: 100%; */
    }
`;

const Bar = styled.div`
  width: ${(props) => props.width}px;
  height: 85px;
  background-color: #121212;
  animation: ${slide} ${(props) => props.duration}s linear infinite alternate;
`;

export default BGLeft;
