import React from 'react';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider
} from '@mui/material/styles';

import NavBar from './components/NavBar';
import About from './components/About';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF'
    }
  }
});
const responsiveTheme = responsiveFontSizes(theme);

const App = () => (
  <>
    <ThemeProvider theme={responsiveTheme}>
      <NavBar />
      <About />
    </ThemeProvider>
  </>
)

export default App;
