import styled from "styled-components";

export const Content = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  margin: 1rem;

  img {
    width: 286px;
    height: 286px;
    margin-right: 2rem;
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

  @media (max-width: 990px) {
    width: 100%;
    img {
      margin-right: 0;
    }
  }
  @media (max-width: 645px) {
    img {
      width: 230px;
      height: 250px;
    }
  }

  @media (max-width: 490px) {
    img {
      display: none;
    }
  }
`;
