import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#ffffff",
  fontColor: "#000000",
  boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
  textBox: " rgba(218, 218, 218, 0.85);",
};
export const darkTheme = {
  body: "#292C35",
  fontColor: "#ffffff",
  boxShadow: "rgba(187, 192, 200, 0.1) 0px 10px 10px -10px",
  textBox: "rgba(95, 95, 95, 0.85)",
};

export const GlobalStyles = createGlobalStyle`
body {
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
  transition: all 0.2s ease-in;
}
.navbar {
  background-color: ${(props) => props.theme.body};
  transition: all 0.2s ease-in;
}
.on-scroll {
  box-shadow: ${(props) => props.theme.boxShadow};
}
.proj__text {
  background-color: ${(props) => props.theme.textBox};
}
.hamburger span {
  background-color: ${(props) => props.theme.fontColor};
}
`;
