import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" }, 
    secondary: { main: "#9c27b0" }, 
    background: { default: "#89afe7ff", paper: "#ffffff" }, 
    text: { primary: "#1a1a1a", secondary: "#555" },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" }, 
    secondary: { main: "#f48fb1" }, 
    background: { default: "#201f1fff", paper: "#1e1e1e" }, 
    text: { primary: "#e0e0e0", secondary: "#aaa" },
  },
});
