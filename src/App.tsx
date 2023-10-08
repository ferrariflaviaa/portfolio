import React from "react";
import { ThemeProvider } from "styled-components";

import themes from "./themes";

function App() {
  return <ThemeProvider theme={themes}></ThemeProvider>;
}

export default App;
