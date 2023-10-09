import React from "react";
import { ThemeProvider } from "styled-components";

import { Header } from "./components/header";
import { GlobalStyles } from "./styles/globalStyles";
import themes from "./themes";

function App() {
  return (
    <>
      <ThemeProvider theme={themes}>
        <Header />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
