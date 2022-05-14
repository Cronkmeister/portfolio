import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#ffffff",
  fontColor: "#000000",
};
export const darkTheme = {
  body: "#292C35",
  fontColor: "#ffffff",
};

export const GlobalStyles = createGlobalStyle`
body {
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
  transition: all 0.2s ease-in;
}
`;
