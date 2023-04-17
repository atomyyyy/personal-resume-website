import React from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

import GithubIcon from './Icon/GithubIcon';
import LinkedinIcon from './Icon/LinkedinIcon';
import StackOverflowIcon from './Icon/StackOverflowIcon';
import background from '../images/background.png';

const SectionWrapper = styled.section`
  height: 100vh;
  width: 100%;
  margin-top: -40px; // offset navbar
  display:inline-flex;
  align-items:center;
  justify-content:center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${background});
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
  background: black;
  opacity: 70%;
  backdrop-filter: blur(10px);
`

const ContactSectionWrapper = styled.div`
  display:inline-flex;
  flex-direction: row;
  align-items:center;
  justify-content:center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const StyledTitle = styled(Typography)`
  color: white;
  padding-top: 1rem;
  padding-bottom: 1rem;
`
const StyledDescription = styled(Typography)`
  color: white;
  line-height: 1.6;
  padding: 5px;
`

// const StyledButton = styled(Button)`
//   border-radius: 60%;
//   &:hover {
//     background: orange;
//     font-weight: 900;
//   }
// `

const FrontPage = () => (
  <SectionWrapper id='front-page'>
    <ContentWrapper>
      <StyledTitle align={'center'} variant='h4'>
        I am <b>Alan Yuen</b>.
      </StyledTitle>
      <StyledDescription align={'center'} variant={'body2'}>
        I am a Hong Kong based <b>Backend Software Engineer</b>, <b>DevOps</b> and <b>Data Engineer</b>.
        Currently I am working in Accenture Technology helping to build highly available systems with mordern architecture.
      </StyledDescription>
      <ContactSectionWrapper>
        <GithubIcon onClick={() => window.open('https://github.com/atomyyyy', '_blank')} />
        <LinkedinIcon onClick={() => window.open('https://www.linkedin.com/in/alan-t-yuen', '_blank')} />
        <StackOverflowIcon onClick={() => window.open('https://stackoverflow.com/users/15791594/atomyyy', '_blank')} />
      </ContactSectionWrapper>
    </ContentWrapper>
  </SectionWrapper>
)

export default FrontPage;
