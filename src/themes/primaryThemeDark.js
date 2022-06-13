// import { createTheme } from "@mui/material/styles";

// export const themeOptions = {
//   palette: {
//     type: 'dark',
//     mode: 'dark',
//     primary: {
//       main: '#bfe496',
//     },
//     secondary: {
//       main: '#c5c5c5',
//     },
//     warning: {
//       main: '#ff9800',
//     },
//     success: {
//       main: '#4ca7af',
//     },
//   },
// };

// const theme=createTheme(themeOptions);
// export default theme

import { createTheme } from "@mui/material/styles";

export const themeOptions = {
  palette: {
    type: "dark",
    mode: "dark",
    primary: {
      main: "#5893df",
    },
    secondary: {
      main: "#2ec5d3",
    },
    background: {
      default: "#192231",
      paper: "#24344d",
    },
  },
};

const theme = createTheme(themeOptions);
export default theme;
