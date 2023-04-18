import React from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const SectionWrapper = styled.section`
  width: 100%;
  background-color: #333131;
  display:inline-flex;
  align-items:center;
  justify-content:center;
`;

const StyledGridContainer = styled(Grid)`
  width: 100%;
  color: white;
  max-width: calc(60%, 220px);
  min-width: 220px;
  max-width: 700px;
  padding: 30px;
`

const StyledTitle = styled(Typography)`
  text-decoration: underline;
  text-underline-offset: 2px;
  text-decoration-color: #E7D1FF;
`

const StyledDescription = styled(Typography)`
  line-height: 1.6;
  padding: 5px;
`

const About = () => (
  <SectionWrapper id='about'>
    <StyledGridContainer container spacing={2}>
      <Grid item xs={12}>
        <StyledTitle align={'center'} variant='h4'>
          <b>About Me</b>
        </StyledTitle>
      </Grid>
      <Grid item xs={12}>
        <StyledDescription align={'center'} variant='body2'>
          I am a passionate software engineer from Hong Kong with finance background. In my free time, 
          I enjoy staying up-to-date with the latest trends and advancements in software engineering, and 
          I am always looking for ways to improve my skills and knowledge.
          <br /><br />
          Outside of work, I am an avid cyclist and enjoy exploring new routes and challenging myself with
          long-distance rides. I also enjoy playing Go, a strategic board game that requires both analytical
          thinking and intuition. I find that these physical and mental activities help me stay balanced and 
          energized, and allow me to approach my work with fresh ideas and perspectives.
        </StyledDescription>
      </Grid>
      <Grid item xs={12}>
        <b>Location</b>: Toronto, Canada
      </Grid>
      <Grid item xs={12}>
        <b>Age</b>: 28
      </Grid>
      <Grid item xs={12}>
        <b>Nationality</b>: Hong Kong
      </Grid>
      <Grid item xs={12}>
        <b>Interests</b>: Go (Game), Badminton, Cycling
      </Grid>
      <Grid item xs={12}>
        <b>Study</b>: Chinese University of Hong Kong
      </Grid>
      <Grid item xs={12}>
        <b>Language</b>: Cantonese, English (Fluent)
      </Grid>
      <Grid item xs={12}>
        <b>Employment</b>: Accenture Technology
      </Grid>
    </StyledGridContainer>
  </SectionWrapper>
)

export default About;
