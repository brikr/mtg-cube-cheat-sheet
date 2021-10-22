import Main from "components/Main";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "theme";
import GlobalStyle from "theme/global-style";

const App: React.FC = () => {
  const darkModeMatch = window.matchMedia("(prefers-color-scheme: dark)");
  const [prefersDarkMode, setPrefersDarkMode] = useState(darkModeMatch.matches);
  darkModeMatch.addEventListener("change", (e) => {
    setPrefersDarkMode(e.matches);
  });

  return (
    <ThemeProvider theme={prefersDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  );
};

export default App;
