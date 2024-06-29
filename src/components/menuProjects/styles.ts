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
    font-family: Poppins;
    font-size: 1.8rem;
    font-weight: 500;
    margin-right: 16px;
    margin-top: 16px;
    cursor: pointer;
  }

  ${({ type }) =>
    type === "site"
      ? css`
          .site {
            color: ${({ theme }) => theme.COLORS.BGCOLOR3};
          }
        `
      : type === "siystem"
      ? css`
          .siystem {
            color: ${({ theme }) => theme.COLORS.BGCOLOR3};
          }
        `
      : type === "application"
      ? css`
          .application {
            color: ${({ theme }) => theme.COLORS.BGCOLOR3};
          }
        `
      : css`
          .site {
            color: ${({ theme }) => theme.COLORS.WHITE};
          }
        `}
`;
