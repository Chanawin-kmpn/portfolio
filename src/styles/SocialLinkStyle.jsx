import styled from "styled-components";

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
`;

const Link = styled.a`
  & img {
    transition: 250ms;
  }
  &:hover {
    img {
      transform: translateY(-5px);
    }
  }
`;

const Line = styled.div`
  width: 11rem;
  height: 0.125rem;
  background-color: #121212;
`;

export { SocialWrapper, Link, Line };
