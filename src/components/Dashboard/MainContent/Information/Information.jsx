import { React, useState } from 'react';
import { Typography, Box } from '@mui/material';
import Radio from '@mui/material/Radio';
import InformationImg from '../../../../assets/Registration_information.svg';
import SkillsImg from '../../../../assets/Skills.svg';
import InformationInputs from './InformationInputs';
import SkillsInputs from './SkillsInputs';


const Information = () => {
  const [selectedRadio, setSelectedRadio] = useState('first');
  const handleChange = () => {
    setSelectedRadio(selectedRadio === 'first' ? 'second' : 'first');
  };
  return (
    <Box
      sx={{
        FlexShrink: 1,
        width: '73%',
        height: '95%',
        borderRadius: '45px',
        padding: '30px 60px',
        backgroundColor: 'white',
        marginRight: '2%',
      }}>
      <Box
        sx={{ display: 'grid', gridTemplateColumns: '50% 50%', width: '100%' }}>
        <Box
          sx={{
            gridColumn: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingInline: '15px',
            border: selectedRadio === 'first' ? '1px solid #7645DF' : '1px solid black',
            backgroundColor :selectedRadio === 'first' ? '#7645DF36' : 'white',
            borderRadius: '15px',
            marginRight: '2.5%',
          }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              AlignItems: 'flex-start',
            }}>
            <Radio
              checked={selectedRadio === 'first'}
              onChange={handleChange}
              value="first"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'first' }}
              sx={{ width: '20px' }}
            />
            <Typography>Personal Information</Typography>
            <Typography>Manage Your info</Typography>
          </Box>

          <img src={InformationImg} />
        </Box>
        <Box
          sx={{
            gridColumn: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingInline: '15px',
            border: selectedRadio === 'first' ? '1px solid black' : '1px solid purple',
            backgroundColor : selectedRadio === 'second' ? '#7645DF36' : 'white',
            borderRadius: '15px',
            marginLeft: '2.5%',
          }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              AlignItems: 'flex-start',
            }}>
            <Radio
              checked={selectedRadio === 'second'}
              onChange={handleChange}
              value="second"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'second' }}
              sx={{ width: '20px' }}
            />
            <Typography>Skills / Competences</Typography>
            <Typography>Skills Sets & Expertise</Typography>
          </Box>
          <img src={SkillsImg} style={{ marginTop: '20px' }} />
        </Box>
      </Box>
      <Box sx={{mt : '20px', height: '72%'}}>
        {selectedRadio === 'first' ? <InformationInputs/> : <SkillsInputs/>}
      </Box>
    </Box>
  );
};

export default Information;
