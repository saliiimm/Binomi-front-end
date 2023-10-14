import {React,useState,cloneElement} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider,styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import { deepPurple } from '@mui/material/colors';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import Grey from '../../assets/grey_picture.jpeg';
import LinkToProfile from '../../assets/linkToProfile';
import './Dashboard.css'

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

function generate(element) {
  return [0, 1, 2].map((value) =>
    cloneElement(element, {
      key: value,
    })
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));


function notificationsLabel(count) {
  if (count === 0) {
    return 'no notifications';
  }
  if (count > 99) {
    return 'more than 99 notifications';
  }
  return `${count} notifications`;
}

const Dashboard = () => {

    const [dense, setDense] = useState(false);
    const [secondary, setSecondary] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: '#DBE9EE',
        width: '100%',
        height: '100vh',
      }}>
      <CssBaseline />
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
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          BoxShadow: ' 6px 0px 28px -3px #00000029 !important',
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            borderRadius: '0 27px 27px 0',
            BoxShadow: ' 6px 0px 28px -3px #00000029  !important',
            p: '15px',
            position: 'relative',
          },
        }}
        variant="permanent"
        anchor="left">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '15px',
            position: 'relative',
          }}>
          <Avatar
            alt="Grey Lanisteur"
            src={Grey}
            sx={{
              width: 136,
              height: 136,
              border: '4px solid #4618A8',
              boxShadow: '-5px 4px 10px 0px #00000047',
            }}
          />
          <ThemeProvider theme={theme}>
            <AddCircleIcon
              color="primary"
              sx={{
                fontWeight: '400',
                fontSize: '50px',
                position: 'absolute',
                right: '-3px',
                top: '110px',
              }}
            />
          </ThemeProvider>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              color: 'black',
              fontSize: 22,
              fontWeight: '600',
              marginTop: '18px',
            }}>
            Grey Lanisteur
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color: 'grey', fontSize: 13, fontWeight: '500' }}>
            Computer science Student
          </Typography>
        </Box>
        <Box
          sx={{
            width: '95%',
            height: '435px',
            margin: '10px auto 10px auto',
            border: '3px solid grey ',
            borderRadius: '12px',
            padding: '15px 20px 15px 20px',
            position: 'relative',
          }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ color: 'black', fontSize: 20, fontWeight: '600' }}>
              Matches
            </Typography>
            <Typography
              variant="p"
              noWrap
              component="div"
              sx={{ color: '#5E34A9', fontSize: 12, fontWeight: '500' }}>
              View All
            </Typography>
          </Box>
          <Divider />
          <Demo>
            <List dense={dense}>
              {generate(
                <ListItem
                  disableGutters
                  className="listItem"
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <SvgIcon
                        component={LinkToProfile}
                        sx={{
                          fontWeight: '400',
                          fontSize: '15px',
                        }}
                      />
                    </IconButton>
                  }>
                  <ListItemAvatar className="iconList">
                    <Avatar
                      className="iconListAvatar"
                      alt="Grey Lanisteur"
                      src={Grey}
                      sx={{
                        border: '0.5px solid #4618A8',
                      }}></Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    className="listText"
                    primaryTypographyProps={{
                      fontSize: '14px',
                      fontWeight: '700',
                      width: '100%',
                    }}
                    primary="Grey Lanisteur"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
              )}
            </List>
          </Demo>
          <ArrowCircleDownIcon
            sx={{ position: 'absolute', bottom: '5px', left: '45%' }}
          />
        </Box>
        <Button
          variant="text"
          startIcon={<LogoutIcon />}
          color="primary"
          sx={{
            position: 'absolute',
            bottom: '3px',
            left: '3px',
            color: 'black',
            fontSize: '12px',
          }}>
          Log out
        </Button>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}

export default Dashboard