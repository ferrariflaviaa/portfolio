/* eslint-disable no-nested-ternary */
import styled, { css } from "styled-components";

interface IProps {
  github: boolean;
  web: boolean;
}
export const CustomContainerProjectPresentation = styled.div<IProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 16px;

  img {
    width: 309px;
    height: 170px;
    flex-shrink: 0;
    border-radius: 12px;
    margin-right: 28px;
  }

  .about {
    width: 40%;
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.COLORS.WHITE};

    .redes {
      display: flex;
      flex-direction: row;
    }

    h1 {
      font-family: Inter;
      font-size: 1.6rem;
      font-weight: 300;
    }

    h2 {
      font-size: 1.2rem;
      font-weight: 200;
      font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
      margin: 10px 0;
    }

    img {
      width: 40px;
      height: 40px;
      flex-shrink: 0;
    }

    ${({ github }) =>
      github === false
        ? css`
            .github {
              display: none;
            }
          `
        : css`
            .github {
            }
          `}

    ${({ web }) =>
      web === false
        ? css`
            .web {
              display: none;
            }
          `
        : css`
            .web {
            }
          `}


   @media (max-width: 990px) {
      width: 60%;
    }

    @media (max-width: 650px) {
      width: 60%;
      h1 {
        font-family: Inter;
        font-size: 1.4rem;
        font-weight: 300;
      }

      h2 {
        font-size: 1rem;
        font-weight: 200;
        font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
        margin: 10px 0;
      }
    }
  }

  @media (max-width: 990px) {
    .imgProject {
      width: 209px;
      height: 120px;
    }
  }

  @media (max-width: 650px) {
    width: 100%;
  }

  @media (max-width: 490px) {
    .imgProject {
      display: none;
    }
  }
`;
