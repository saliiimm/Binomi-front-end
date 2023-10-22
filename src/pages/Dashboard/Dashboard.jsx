import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import './Dashboard.css';
import Sidebar from '../../components/Dashboard/SideBar/Sidebar';
import TopBar from '../../components/Dashboard/TopBar/TopBar';
import MainDashboard from '../../components/Dashboard/MainContent/MainDashboard';

const Dashboard = () => {

  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: '#DBE9EE',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}>
      <CssBaseline />
      <TopBar />
      <Sidebar />
      <MainDashboard />
    </Box>
  );
}

export default Dashboard