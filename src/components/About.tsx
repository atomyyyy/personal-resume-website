import React from 'react';
import styled from 'styled-components';

import background from '../images/background.png';

const SectionWrapper = styled.section`
  width: 100vw;
  height: calc(100vh + 50px);
  margin-top: -50px; // offset navbar
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
  padding: 30px;
  display:inline-flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  background: black;
  opacity: 70%;
  backdrop-filter: blur(10px);
`

const Title = styled.div`
  color: white;
  font-size: 48px;
  padding-top: 20px;
  padding-bottom: 20px;
`

const Description = styled.div`
  color: white;
  line-height: 1.6;
  text-align: center;
  font-size: 18px;
  padding: 5px;
`

const About = () => (
  <SectionWrapper id='about'>
    <ContentWrapper>
      <Title>
        I am <b>Alan Yuen</b>.
      </Title>
      <Description>
        I am a Canada-based <b>Backend Software Engineer</b>, <b>DevOps</b> and <b>Data Engineer</b>.
        Currently I am working in Accenture Technology helping to build highly available systems with mordern architecture.
      </Description>
      <Description>
        In my free time, I love playing badminton, riding and watching movies. I am also a Go (A traditional japanese boardgame, 
        as well as a program language!) enthusiastic, being a Go tutor previously before AI is given birth.
      </Description>
    </ContentWrapper>
  </SectionWrapper>
)

export default About;
