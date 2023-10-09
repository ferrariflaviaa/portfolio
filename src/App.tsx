import React from "react";
import { ThemeProvider } from "styled-components";

import { Header } from "./components/header";
import { Pages } from "./pages";
import { GlobalStyles } from "./styles/globalStyles";
import themes from "./themes";

function App() {
  return (
    <>
      <ThemeProvider theme={themes}>
        <Header />
        <GlobalStyles />
        <Pages />
      </ThemeProvider>
    </>
  );
}

export default App;
