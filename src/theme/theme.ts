import originalStyled, { ThemedStyledInterface } from "styled-components";

const theme = {
  staticColors: {
    cardBorder: "#181510",
  },
  device: {
    tablet: "768px",
  },
};

export const lightTheme = {
  ...theme,
  colors: {
    background: "#f5f6fa",
    color: "black",
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    background: "#19181f",
    color: "white",
  },
};

export type Theme = typeof lightTheme;

export const styled = originalStyled as ThemedStyledInterface<
  typeof lightTheme
>;
