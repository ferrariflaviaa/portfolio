import styled from "styled-components";

export const CustomContainerProjectPresentation = styled.div`
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
  }
`;
