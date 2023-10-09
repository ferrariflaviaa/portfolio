import styled from "styled-components";

export const ContainerHeader = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.COLORS.BGCOLOR2};
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;

  .mobile {
    display: none;
  }

  @media (max-width: 900px) {
    .mobile {
      display: initial;
    }
    > nav {
      display: none;
    }
  }
`;

export const NavHeader = styled.nav`
  display: flex;
  align-items: center;

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin: 8px;
    font-weight: 200;
    cursor: pointer;
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.COLORS.BGCOLOR3};
    }
  }
`;
