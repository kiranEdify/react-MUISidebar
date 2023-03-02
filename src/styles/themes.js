import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#0a1929",
    },
    white: {
      main: "#fdfdfd",
      contrast: "#ffff",
    },
    blue: {
      light: "#3191f2",
      mediumDark: "#b2bac2",
      darkGrey: "#6f7e8c",
      hoverBlue: "#132f4c66",
      selectedBg: "#132f4c",
      selectedHover: "#14385c",
      selectedText: "#66b2ff",
    },
  },
  typography: {
    fontFamily: "IBM Plex Sans",
  },
});
