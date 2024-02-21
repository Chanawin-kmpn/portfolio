import styled from "styled-components";

const MySkillContent = styled.div`
  align-self: flex-end;
  max-width: 870px;
`;

const MySkillDescription = styled.div`
  margin-bottom: 4rem;
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
  & p {
    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }
`;

const SkillSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-inline: 1rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const SkillWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 2rem 1.5rem;
`;

const SkillList = styled.li`
  font-size: 1.25rem;
  letter-spacing: -1px;
  width: 230px;
  max-width: 280px;
  flex: 1 1 200px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SkillIconWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const SkillIconList = styled.li`
  list-style: none;

  & img {
    max-width: 4rem;
  }

  &.double-icon {
    display: flex;
    gap: 1rem;
  }
`;

export {
  MySkillContent,
  MySkillDescription,
  SkillSection,
  SkillWrapper,
  SkillList,
  SkillIconWrapper,
  SkillIconList,
};
