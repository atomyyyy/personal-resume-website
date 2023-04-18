import React, {
  useRef,
  useState,
  useEffect
} from 'react';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider
} from '@mui/material/styles';

import NavBar from './components/NavBar';
import FrontPage from './components/FrontPage';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skill from './components/Skill';

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

const App = () => {
  const [elementHeight, setElementHeight] = useState<any[]>([]);

  const frontPageRef = useRef<HTMLInputElement>(null);
  const aboutRef = useRef<HTMLInputElement>(null);
  const educationRef = useRef<HTMLInputElement>(null);
  const experienceRef = useRef<HTMLInputElement>(null);
  const skillRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setElementHeight([
      { name: 'NavBar', id : null, display: false, height: 0 },
      { name: 'FrontPage', id : null, display: false, height: frontPageRef?.current?.clientHeight },
      { name: 'About', id: 'about', display: true, height: aboutRef?.current?.clientHeight },
      { name: 'Education', id: 'education', display: true, height: educationRef?.current?.clientHeight },
      { name: 'Experience', id: 'experience', display: true, height: experienceRef?.current?.clientHeight },
      { name: 'Skills', id: 'skills', display: true, height: skillRef?.current?.clientHeight },
    ]);
  }, [
    frontPageRef?.current?.clientHeight,
    aboutRef?.current?.clientHeight,
    educationRef?.current?.clientHeight,
    experienceRef?.current?.clientHeight,
    skillRef?.current?.clientHeight
  ]);

  return (
    <>
      <ThemeProvider theme={responsiveTheme}>
        <NavBar data={elementHeight} />
        <div ref={frontPageRef}>
          <FrontPage />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={educationRef}>
          <Education />
        </div>
        <div ref={experienceRef}>
          <Experience />
        </div>
        <div ref={skillRef}>
          <Skill />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App;
