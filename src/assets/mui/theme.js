import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material';
import React from 'react';

export default function MuiTheme({ children }) {
  let theme = createTheme({
    palette: {
      primary: { main: '#5A3ED1', dark: '#3F28A4' },
    },
    typography: {
      h1: {
        fontSize: 60,
        fontFamily: '"Hanken Grotesk", "Roboto","Helvetica","Arial",sans-serif',
        fontWeight: 900,
      },
      h2: {
        fontSize: 48,
        fontFamily: '"Hanken Grotesk", "Roboto","Helvetica","Arial",sans-serif',
        fontWeight: 900,
      },
      h4: {
        fontSize: 28,
        fontWeight: 700,
        fontFamily: '"Hanken Grotesk", "Roboto","Helvetica","Arial",sans-serif',
      },
      h5: {
        fontSize: 25,
        fontWeight: 400,
        fontFamily: '"Hanken Grotesk", "Roboto","Helvetica","Arial",sans-serif',
      },
      h6: {
        fontSize: 18,
        fontWeight: 500,
        fontFamily: '"Hanken Grotesk", "Roboto","Helvetica","Arial",sans-serif',
      },
    },
  });

  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
