import styled from "styled-components";

export const CustomContainerSkillBoard = styled.div`
  width: 455px;
  height: 490px;
  border-radius: 10px;
  background: ${({ theme }) => theme.COLORS.BGCOLOR2};
  margin: 1.5rem 0;
  padding: 2rem;

  h2,
  h3 {
    color: #fff;
    margin-top: 16px;
  }
  h2 {
    font-family: Inter;
    font-size: 32px;
    font-weight: 600;
  }
  h3 {
    font-family: Cambria, serif;
    font-size: 20px;
    font-weight: 100;
    text-align: start;
  }
`;
export const CustomIcon = styled.text`
  color: ${({ theme }) => theme.COLORS.BGCOLOR3};
`;
