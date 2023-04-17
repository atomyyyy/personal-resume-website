import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { EducationDataType as EducationProps } from '../types/EducationDataType';
import Period from './Period';

const StyledGridContainer = styled(Grid)`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`

const StyledGridItem = styled(Grid)(({ theme }) => ({
  paddingTop: '0.1rem',
  paddingBottom: '0.1rem', 
  [theme.breakpoints.down('md')]: {
    display: 'inline-flex',
    justifyContent: 'center'
  }
}))

const Education = (props: EducationProps) => (
  <StyledGridContainer container flexDirection='row' alignItems='center' spacing={0}>
    <StyledGridItem item xs={12} md={9}>
      <b>{props.name}</b>{props.country ? `, ${props.country}` : null}
    </StyledGridItem>
    <StyledGridItem item xs={12} md={3}>
      <Period startDate={props.startDate} endDate={props.endDate} />
    </StyledGridItem>
    {
      props.description.map((data, ix) => (
        <StyledGridItem item xs={12} md={12} key={`${props.name}-description-${ix}`}>
          <Typography variant='body2'>
            {data}
          </Typography>
        </StyledGridItem>
      ))
    }
  </StyledGridContainer>
)

export default Education;