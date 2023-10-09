import styled from "styled-components";

import imgApresentation from "../../../assets/background-1.png";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${imgApresentation});
  background-repeat: no-repeat;
  width: 100%;
  height: 600px;

  .ciclePhoto {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    flex-shrink: 0;
    border-radius: 300px;
    background: var(--BGCOLOR1, #282a2d);
  }

  .apresentation {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 347px;
    height: 228px;
    margin-top: 8px;
    padding: 20px 0;
    flex-shrink: 0;
    border-radius: 32px;
    background: linear-gradient(
      180deg,
      #fff -24.14%,
      rgba(255, 255, 255, 0) 99.87%
    );

    h3 {
      font-weight: 300;
      margin: 1rem 0;
    }
  }

  .networks {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
