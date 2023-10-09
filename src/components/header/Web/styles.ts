import styled from "styled-components";

export const ContainerHeader = styled.div`
  width: 100%;
  height: 50px;
  background-color: #2a3647;
  display: flex;
  justify-content: flex-end;
  padding: 0 10px;
`;

export const NavHeader = styled.nav`
  display: flex;
  align-items: center;

  h3 {
    color: #ffff;
    margin: 8px;
    font-weight: 200;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.COLORS.BGCOLOR3};
    }
  }
`;
