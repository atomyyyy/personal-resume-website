import React from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// component
import ProgressBar from './ProgressBar';

// data
import SkillData from '../data/SkillData';

const SectionWrapper = styled.section`
  width: 100%;
  background-color: white;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  margin-bottom: 20px;
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

const Resume = () => (
  <SectionWrapper id='skills'>
    <StyledGridContainer container justifyContent='space-between' spacing={3}>
      <Grid item xs={12}>
        <StyledTitle align={'center'} variant='h4'>
          <b>Skills</b>
        </StyledTitle>
      </Grid>
      {
        SkillData.map((data, ix) => (
          <Grid key={`${data.group}-${ix}`} container item xs={12} md={6}>
            <Grid item xs={12} md={12}>
              <StyledTitle align={'center'} variant='h5'>
                {data.group}
              </StyledTitle>
            </Grid>
            {
              data.details.map((row, ix) => (
                <Grid key={`${row.name}-${ix}`} item xs={12} md={12}>
                  <Typography variant='overline'> {row.name} </Typography>
                  <ProgressBar color={data.color} value={row.score} />
                </Grid>
              ))
            }
          </Grid>
        ))
      }
    </StyledGridContainer>
  </SectionWrapper>
)

export default Resume;
