import styled from "styled-components";

export const CustomContainerSkillBoard = styled.div`
  width: 350px;
  min-height: 400px;
  max-height: 400px;
  border-radius: 10px;
  background: ${({ theme }) => theme.COLORS.BGCOLOR2};
  margin: 1.5rem 2rem;
  padding: 1rem;

  h2,
  h3 {
    color: #fff;
    margin-top: 16px;
  }
  h2 {
    font-family: Poppins;
    font-size: 30px;
    font-weight: 600;
  }
  h3 {
    font-family: Poppins, serif;
    font-size: 18px;
    font-weight: 100;
    text-align: start;
  }

  @media (max-width: 645px) {
    h2 {
      font-size: 28px;
    }
  }

  @media (max-width: 490px) {
    width: 350px;
    h2 {
      font-size: 28px;
    }
  }
`;
