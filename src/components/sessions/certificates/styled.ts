import styled from "styled-components";

export const CustomContentCertificates = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  img {
    width: 450px;
    height: 250px;
    border-radius: 10px;
    margin: 30px 8px;
  }

  .carousel {
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow-x: auto;
    scroll-behavior: smooth;
    cursor: grab;
    overflow: hidden;
  }
  .inner {
    display: flex;
  }
`;
