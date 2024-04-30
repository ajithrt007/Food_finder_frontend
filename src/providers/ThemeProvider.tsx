"use client";

import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "@/themes/darktheme";

export default function ThemeProviderMUI({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
}
