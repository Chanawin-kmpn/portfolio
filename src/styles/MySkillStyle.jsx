import styled from "styled-components";

const MySkillContent = styled.div`
  align-self: flex-end;
  max-width: 870px;
`;

const MySkillDescription = styled.div`
  margin-bottom: 4rem;
`;

const SkillSection = styled.div`
  padding-inline: 1rem;
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
`;

export {
  MySkillContent,
  MySkillDescription,
  SkillSection,
  SkillWrapper,
  SkillList,
};
