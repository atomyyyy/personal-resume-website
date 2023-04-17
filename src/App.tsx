import React from 'react';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider
} from '@mui/material/styles';

import NavBar from './components/NavBar';
import FrontPage from './components/FrontPage';
import About from './components/About';
import Resume from './components/Resume';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF'
    }
  },
  typography: {
    body2: {
      fontSize: '0.875rem'
    },
  }
});
const responsiveTheme = responsiveFontSizes(theme);

const App = () => (
  <>
    <ThemeProvider theme={responsiveTheme}>
      <NavBar />
      <FrontPage />
      <About />
      <Resume />
    </ThemeProvider>
  </>
)

export default App;
