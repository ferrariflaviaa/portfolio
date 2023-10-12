import styled from "styled-components";

export const CustomContentSkill = styled.div`
  width: 100%;
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;

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
