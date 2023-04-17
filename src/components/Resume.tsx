import React from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import ProgressBar from './ProgressBar';

const SectionWrapper = styled.section`
  width: 100%;
  background-color: white;
  display:inline-flex;
  align-items:center;
  justify-content:center;
`;

const StyledGridContainer = styled(Grid)`
  width: 100%;
  color: black;
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
`

const Resume = () => (
  <SectionWrapper id='resume'>
    <StyledGridContainer container justifyContent='space-between' spacing={2}>
      <Grid item xs={12}>
        <StyledTitle align={'center'} variant='h4'>
          <b>Education</b>
        </StyledTitle>
      </Grid>
      <Grid item xs={12} md={8}>
        Chinese University of Hong Kong
      </Grid>
      <Grid item xs={12} md={4}>
        Sept 2013 - Nov 2018
      </Grid>
      <Grid item xs={12}>
        <StyledDescription variant={'body2'}>
          Bachelor of Science, Quantitative Finance
        </StyledDescription>
      </Grid>
      <Grid item xs={12}>
        <ProgressBar value={0} />
      </Grid>
      <Grid item xs={12}>
        <ProgressBar value={0.2} />
      </Grid>
      <Grid item xs={12}>
        <ProgressBar value={0.4} />
      </Grid>
      <Grid item xs={12}>
        <ProgressBar value={0.6} />
      </Grid>
      <Grid item xs={12}>
        <ProgressBar value={0.8} />
      </Grid>
      <Grid item xs={12}>
        <ProgressBar value={1} />
      </Grid>
    </StyledGridContainer>
  </SectionWrapper>
)

export default Resume;
