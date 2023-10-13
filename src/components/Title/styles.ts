import styled from "styled-components";

export const CustomContenterTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: start;
  flex-direction: column;
  h1 {
    font-family: Inter;
    font-size: 36px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  .horizontal-line {
    width: 30%;
    border: 4px solid #b1bac7;
  }

  @media (max-width: 490px) {
    h1 {
      font-size: 30px;
    }
  }
`;
