import React from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';

const SectionWrapper = styled.section`
  width: 100%;
  background-color: grey;
  display:inline-flex;
  align-items:center;
  justify-content:center;
`;

const ContentWrapper = styled.div`
  width: 60%;
  max-width: calc(60%, 220px);
  min-width: 220px;
  max-width: 700px;
  padding: 30px;
  display:inline-flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
`

const StyledTitle = styled(Typography)`
  color: white;
  padding-top: 1rem;
  padding-bottom: 1rem;
`

const About = () => (
  <SectionWrapper id='about'>
    <ContentWrapper>
      <StyledTitle align={'center'} variant='h4'>
        <b>About</b>
      </StyledTitle>
    </ContentWrapper>
  </SectionWrapper>
)

export default About;
