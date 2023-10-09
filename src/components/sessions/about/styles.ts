import styled from "styled-components";

export const Content = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  margin: 1rem;

  img {
    margin-left: 2rem;
  }
  .about {
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    h4 {
      font-family: Cambria, serif;
      color: ${({ theme }) => theme.COLORS.WHITE};
      padding-top: 1rem;
      font-size: 1rem;
      font-weight: 200;
    }
  }
`;
