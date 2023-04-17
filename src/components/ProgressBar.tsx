import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
  },
}));

const ProgressBar = (prop: { value: number, color?: string }) => (
  <Box sx={{ flexGrow: 1 }}>
    <BorderLinearProgress variant='determinate' value={prop.value*100} sx={{ 
      [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: (prop.color ?? '#1a90ff'),
      },
     }} />
  </Box>
)

export default ProgressBar;