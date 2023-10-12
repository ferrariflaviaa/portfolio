/* eslint-disable no-nested-ternary */
import styled, { css } from "styled-components";

interface IProps {
  type: string;
}
export const CustomContainerMenuProject = styled.div<IProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: Inter;
    font-size: 2rem;
    font-weight: 500;
    margin-right: 16px;
    cursor: pointer;
  }

  ${({ type }) =>
    type === "site"
      ? css`
          .site {
            color: ${({ theme }) => theme.COLORS.BGCOLOR3};
          }
        `
      : type === "sistema"
      ? css`
          .sistema {
            color: ${({ theme }) => theme.COLORS.BGCOLOR3};
          }
        `
      : type === "aplicativo"
      ? css`
          .aplicativo {
            color: ${({ theme }) => theme.COLORS.BGCOLOR3};
          }
        `
      : css`
          .site {
            color: ${({ theme }) => theme.COLORS.WHITE};
          }
        `}
`;