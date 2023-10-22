import React from 'react'
import {Box} from '@mui/material';
import Information from './Information/Information';
import Biography from './Biography/Biography';
import './Information/Information.css';

const MainDashboard = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        mt: '75px',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'start',
        height: '92vh',
       
      }}>
      <Information/>
      <Biography/>
    </Box>
  );
}

export default MainDashboard