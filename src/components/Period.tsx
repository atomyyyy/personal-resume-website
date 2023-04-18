import React from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

type PeriodProps = {
  startDate: Date;
  endDate?: Date;
}

const StyledGrid = styled(Grid)`
  width: 100%;
  line-height: 1.6;
  max-width: 150px;
`

const Period = (props: PeriodProps) => (
  <StyledGrid container justifyContent='space-between'>
    <Grid item sx={{minWidth: '63px', textAlign: 'left'}}>
      <Typography variant={'body2'}>
        {props.startDate?.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short'
        })}
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant={'body2'}>
        {'—'}
      </Typography>
    </Grid>
    <Grid item sx={{minWidth: '63px', textAlign: 'left'}}>
      <Typography variant={'body2'}>
        {props.endDate?.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short'
        }) || 'Now'}
      </Typography>
    </Grid>
  </StyledGrid>
);

export default Period;