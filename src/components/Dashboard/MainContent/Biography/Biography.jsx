import React from 'react'
import { Typography,Box } from '@mui/material';

const Biography = () => {
  return (
    <Box
      sx={{
        width: '25%',
        FlexShrink: 1,
        height: '100%',
        mt : '17px'
      }}>
      <Typography
        variant="h5"
        noWrap
        component="div"
        sx={{ color: 'grey', fontWeight: '500' }}>
        Biography
      </Typography>
      <Typography
        variant="p"
        component="div"
        sx={{
          color: 'black',
          fontSize: 14,
          fontWeight: '500',
          mt: '17px',
          width: '100%',
        }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </Typography>
      <Box
        sx={{
          width: '90%',
          height: '18%',
          backgroundColor: 'white',
          marginInline: 'auto',
          borderRadius: '25px',
          mt: '25px',
          p: '5px 15px',
        }}>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ color: '#5E34A9', fontWeight: '500' }}>
          Social contact
        </Typography>
      </Box>
    </Box>
  );
}

export default Biography