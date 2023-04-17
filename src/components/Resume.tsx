import React from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// component
import Education from './Education';
import ProgressBar from './ProgressBar';

// data
import EducationData from '../data/EducationData';

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

const Resume = () => (
  <SectionWrapper id='resume'>
    <StyledGridContainer container justifyContent='space-between' spacing={1}>
      <Grid item xs={12}>
        <StyledTitle align={'center'} variant='h4'>
          <b>Education</b>
        </StyledTitle>
      </Grid>
      {
        EducationData.map((data, ix) => (
          <Grid item xs={12} key={`${data.name}-education-${ix}`}>
            <Education {...data} />
          </Grid>
        ))
      }
      <Grid item xs={12}>
        <StyledTitle align={'center'} variant='h4'>
          <b>Skills</b>
        </StyledTitle>
      </Grid>
      {/* Backend */}
      <Grid container item xs={12} md={6}>
        <Grid item xs={12} md={12}>
          <StyledTitle align={'center'} variant='h5'>
            Backend
          </StyledTitle>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant='overline'> NodeJS (Express / Koa) </Typography>
          <ProgressBar color='purple' value={1} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant='overline'> Python (Django) </Typography>
          <ProgressBar color='purple' value={1} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant='overline'> OpenId Connect </Typography>
          <ProgressBar color='purple' value={0.95} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant='overline'> Nginx </Typography>
          <ProgressBar color='purple' value={0.9} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant='overline'> Redis </Typography>
          <ProgressBar color='purple' value={0.85} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant='overline'> MongoDB </Typography>
          <ProgressBar color='purple' value={0.85} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant='overline'> PostgresDB </Typography>
          <ProgressBar color='purple' value={0.8} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant='overline'> Java (SpringBoot) </Typography>
          <ProgressBar color='purple' value={0.7} />
        </Grid>
      </Grid>
      {/* DevOps */}
      <Grid container item xs={12} md={6}>
        <Grid item xs={12} md={12}>
          <StyledTitle align={'center'} variant='h5'>
            DevOps
          </StyledTitle>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant='overline'> Docker </Typography>
          <ProgressBar color='red' value={1} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant='overline'> Docker Compose </Typography>
          <ProgressBar color='red' value={1} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant='overline'> AWS </Typography>
          <ProgressBar color='red' value={0.8} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant='overline'> Circle CI </Typography>
          <ProgressBar color='red' value={0.75} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant='overline'> Azure </Typography>
          <ProgressBar color='red' value={0.7} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant='overline'> OpenShift (Kubernete) </Typography>
          <ProgressBar color='red' value={0.65} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant='overline'> Jenkins </Typography>
          <ProgressBar color='red' value={0.65} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant='overline'> Travis CI </Typography>
          <ProgressBar color='red' value={0.4} />
        </Grid>
      </Grid>
      {/* Data */}
      <Grid container item xs={12} md={6}>
        <Grid item xs={12} md={12}>
          <StyledTitle align={'center'} variant='h5'>
            Data
          </StyledTitle>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant='overline'> Apache Spark </Typography>
          <ProgressBar color='orange' value={1} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant='overline'> Azure DataBricks </Typography>
          <ProgressBar color='orange' value={0.9} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant='overline'> Machine Learning </Typography>
          <ProgressBar color='orange' value={0.75} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant='overline'> Scala </Typography>
          <ProgressBar color='orange' value={0.4} />
        </Grid>
      </Grid>
      {/* Frontend */}
      <Grid container item xs={12} md={6}>
        <Grid item xs={12} md={12}>
          <StyledTitle align={'center'} variant='h5'>
            Frontend
          </StyledTitle>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant='overline'> React </Typography>
          <ProgressBar value={0.8} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant='overline'> GatsbyJS </Typography>
          <ProgressBar value={0.5} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant='overline'> NextJS </Typography>
          <ProgressBar value={0.4} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant='overline'> Php </Typography>
          <ProgressBar value={0.3} />
        </Grid>
      </Grid>
    </StyledGridContainer>
  </SectionWrapper>
)

export default Resume;
