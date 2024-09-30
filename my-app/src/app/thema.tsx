"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export function Thema({ children }: { children: React.ReactNode }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFFFFF",
      },
      success: {
        main: "#22c55e",
        contrastText: "#FFFFFF",
      },
      error: {
        main: "#ef4444",
      },
      background: {
        default: "#FFFFFF",
      },
      secondary: {
        main: "#FFFFFF",
        contrastText: "#FFFFFF",
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}