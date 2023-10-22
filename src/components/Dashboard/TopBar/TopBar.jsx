import { React } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { deepPurple } from '@mui/material/colors';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import IconButton from '@mui/material/IconButton';

const drawerWidth = 260;

const theme = createTheme({
  palette: {
    secondary: {
      main: '#5E34A9',
    },
    primary: {
      main: '#5E34A9',
    },
  },
});

function notificationsLabel(count) {
  if (count === 0) {
    return 'no notifications';
  }
  if (count > 99) {
    return 'more than 99 notifications';
  }
  return `${count} notifications`;
}

const TopBar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        backgroundColor: '#DBE9EE',
        boxShadow: 'none',
      }}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '15px',
        }}>
        <Box
          sx={{
            backgroundColor: 'white',
            width: '87%',
            height: '55px',
            borderRadius: '15px',
            display: 'flex ',
            alignItems: 'center',
            p: '19px',
          }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color: 'black', fontSize: 23, fontWeight: '500' }}>
            Your Profile :
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '15%',
          }}>
          <ThemeProvider theme={theme}>
            <IconButton
              aria-label={notificationsLabel(100)}
              sx={{ marginLeft: '15px' }}>
              <Badge badgeContent={100} color="secondary">
                <NotificationsNoneIcon
                  color="secondary"
                  fontSize="large"
                  sx={{ fontWeight: '400' }}
                />
              </Badge>
            </IconButton>
          </ThemeProvider>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
