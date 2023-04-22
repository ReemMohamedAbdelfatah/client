import { createTheme } from "@mui/material/styles";

export const shades = {
  primary: {
    100: "#d1d1d3",
    200: "#a3a3a8",
    300: "#75747c",
    400: "#474651",
    500: "#191825",
    600: "#14131e",
    700: "#0f0e16",
    800: "#0a0a0f",
    900: "#050507",
  },
  secondary: {
    100: "#e7dfff",
    200: "#cfbeff",
    300: "#b69eff",
    400: "#9e7dff",
    500: "#865dff",
    600: "#6b4acc",
    700: "#503899",
    800: "#362566",
    900: "#1b1333",
  },
  neutral: {
    100: "#f9e6ff",
    200: "#f4ceff",
    300: "#eeb5ff",
    400: "#e99dff",
    500: "#e384ff",
    600: "#b66acc",
    700: "#884f99",
    800: "#5b3566",
    900: "#2d1a33",
  },
};

export  const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500],
    },
    secondary: {
      main: shades.secondary[500],
    },
    neutral: {
      dark: shades.neutral[700],
      main: shades.neutral[500],
      light: shades.neutral[100],
    },
  },
  typography: {
    fontFamily: ["Fauna One","sans-serif"].join(","),
    fontSize: 11,
    h1: {
      fontFamily: ["Cinzel","sans-serif"].join(","),
      fontSize: 48,
    },
    h2: {
      fontFamily: ["Cinzel","sans-serif"].join(","),
      fontSize: 36,
    },
    h3: {
      fontFamily: ["Cinzel","sans-serif"].join(","),
      fontSize: 20,
    },
    h4: {
      fontFamily: ["Cinzel","sans-serif"].join(","),
      fontSize: 14,
    },
  }
})

export default theme;
