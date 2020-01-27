import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import { Dark, Light } from '.';

const themes = {
  dark: Dark,
  light: Light,
};

const INITIAL_STATE = {
  theme: themes.light,
  toggle: () => {},
};

const ThemeContext = createContext(INITIAL_STATE);

const useTheme = () => {
  return useContext(ThemeContext) || {};
};

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const toggle = () => {
    const isDark = !dark;
    setDark(isDark);
  };

  const theme = dark ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <ThemeProviderStyled theme={theme}>{children}</ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };
