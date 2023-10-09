import styled from "styled-components";

export const CustomContenterTitle = styled.div`
  display: flex;
  /* justify-content: flex-start; */
  flex-direction: column;
  align-items: flex-start;
  h1 {
    font-family: Inter;
    font-size: 50px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  .horizontal-line {
    width: 100%;
    margin: 0 auto;
    border: 2px solid #ccc;
  }
`;
