import styled from "styled-components";

const Line = styled.div`
  width: 11rem;
  height: 0.125rem;
  background-color: #121212;

  @media (max-width: 768px) {
    width: 0rem;
  }
`;
const SocialWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1.25rem;

  &.float-right {
    position: absolute;
    bottom: 4rem;
    right: 0;
  }

  &.column {
    flex-direction: column;

    & ${Line} {
      height: 11rem;
      width: 0.125rem;

      @media (max-width: 768px) {
        height: 0rem;
      }
    }
  }
`;

const Link = styled.a`
  & img {
    max-width: 2rem;
    transition: 250ms;

    @media (max-width: 768px) {
      max-width: 1.5rem;
    }
  }
  &:hover {
    img {
      transform: translateY(-5px);
    }
  }
`;

export { SocialWrapper, Link, Line };
