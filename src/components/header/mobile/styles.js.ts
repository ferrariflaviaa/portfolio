import styled, { css } from "styled-components";

interface IContainerProps {
  isVisible: boolean;
}

export const Container = styled.div<IContainerProps>`
  position: absolute;
  z-index: 15;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(17, 18, 17, 0.95);

  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);

  transition: 0.5s;

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: 0.7s;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  nav {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0.7);
    transition: 0.7s;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
      text-decoration: none;
      font-size: 1.5rem;
    }
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);

      > svg {
        transform: rotate(0deg);
      }

      nav {
        transform: scale(1);
      }
    `}
`;
