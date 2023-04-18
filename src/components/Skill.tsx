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

const Skill = () => (
  <SectionWrapper id='skill'>
    <StyledGridContainer container justifyContent='space-between' spacing={3}>
      <Grid item xs={12}>
        <StyledTitle align={'center'} variant='h4'>
          <b>Skill</b>
        </StyledTitle>
      </Grid>
      <Grid item xs={12}>
        <Typography paragraph={true}>
        In my career, I have developed expertise in a variety of areas, including backend development,
         frontend development, data engineering, and DevOps. I believe that my skills and experience in
         these areas make me a well-rounded software engineer who can contribute to projects at various 
         stages of the development lifecycle.
        </Typography>
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

export default Skill;
