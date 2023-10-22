import { React,useState, cloneElement } from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import SvgIcon from '@mui/material/SvgIcon';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Grey from '../../../assets/grey_picture.jpeg';
import LinkToProfile from '../../../assets/linkToProfile';

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

const Sidebar = () => {

  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);

  return (
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
  );
};

export default Sidebar;
