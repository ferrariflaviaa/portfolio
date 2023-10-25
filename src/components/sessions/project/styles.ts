import styled from "styled-components";

export const CustomContentProject = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .carousel {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 800px;
    overflow-y: auto;
    scroll-behavior: smooth;
    cursor: grab;
    overflow: hidden;
  }
  .inner {
    display: flex;
    flex-direction: column;
  }
`;
