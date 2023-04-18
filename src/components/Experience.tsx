import React from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// component
import ExeperienceRecord from './ResumeRecord';

// data
import ExperienceData from '../data/ExperienceData';

const SectionWrapper = styled.section`
  width: 100%;
  background-color: black;
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

const Education = () => (
  <SectionWrapper id='experience'>
    <StyledGridContainer container justifyContent='space-between' spacing={1}>
      <Grid item xs={12}>
        <StyledTitle align={'center'} variant='h4'>
          <b>Experience</b>
        </StyledTitle>
      </Grid>
      {
        ExperienceData.map((data, ix) => (
          <Grid item xs={12} key={`${data.name}-experience-${ix}`}>
            <ExeperienceRecord {...data} />
          </Grid>
        ))
      }
    </StyledGridContainer>
  </SectionWrapper>
)

export default Education;
