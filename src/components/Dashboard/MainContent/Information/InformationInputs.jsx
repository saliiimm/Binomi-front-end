import {React,useState} from 'react';
import { Box,Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { algerianUniversities, faculties, algerianSpecialities } from './data';
import {
  SimpleSelect,
  SimpleAutoComplete,
  SimpleInput,
  LargeInput,
  SimpleSelectTest,
  SimpleAutoCompleteTest,
} from './GlobalStyles.js';


const InformationInputs = () => {

      const [gender, setGender] = useState('male');

      const handleChangeGender = (event) => {
        setGender(event.target.value);
      };
     
       const [major, setMajor] = useState('bachelor');

       const handleChangeMajor = (event) => {
         setMajor(event.target.value);
       };
    

  return (
    <Box
      component="form"
      className="scrollable-form"
      sx={{ overflowY: 'scroll', overflowX: 'hidden', height: '100%' }}>
      <Typography
        variant="h5"
        noWrap
        component="div"
        sx={{ color: 'black', fontWeight: '500', mb: '15px' }}>
        Basic Information
      </Typography>
      {/**Registration Number*/}
      <FormControl
        variant="standard"
        sx={{ label: { fontSize: 22, color: 'black', fontWeight: '500' } }}>
        <InputLabel shrink htmlFor="last-name">
          Registration Number
        </InputLabel>
        <LargeInput
          placeholder="Your Regsitration Number"
          defaultValue="2112 1310 9555 4"
          id="registration-number"
        />
      </FormControl>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        {/**last name */}
        <FormControl
          variant="standard"
          sx={{ label: { fontSize: 22, color: 'black', fontWeight: '500' } }}>
          <InputLabel shrink htmlFor="last-name">
            Last Name
          </InputLabel>
          <SimpleInput
            placeholder="Your last name"
            defaultValue="Ghalem"
            id="last-name"
          />
        </FormControl>
        {/**first name */}
        <FormControl
          variant="standard"
          sx={{ label: { fontSize: 22, color: 'black', fontWeight: '500' } }}>
          <InputLabel shrink htmlFor="first-name">
            First Name
          </InputLabel>
          <SimpleInput
            placeholder="Your first name"
            defaultValue="Salim"
            id="first-name"
          />
        </FormControl>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width : "92%"
        }}>
        {/**University*/}
        <FormControl
          variant="standard"
          sx={{ label: { fontSize: 22, color: 'black', fontWeight: '500' } }}>
          <InputLabel shrink htmlFor="university">
            University
          </InputLabel>
          <SimpleAutoCompleteTest
            disablePortal
            id="combo-box-demo"
            options={algerianUniversities}
            defaultValue="Université Boumerdès M'hamed Bougara"
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} />}
          />
        </FormControl>
        {/**Faculty*/}
        <FormControl
          variant="standard"
          sx={{ label: { fontSize: 22, color: 'black', fontWeight: '500' } }}>
          <InputLabel shrink htmlFor="faculty">
            Faculty
          </InputLabel>
          <SimpleAutoCompleteTest
            disablePortal
            id="combo-box-demo"
            options={faculties}
            defaultValue="Faculté des sciences"
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} />}
          />
        </FormControl>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width : '92%'
        }}>
        {/**Major*/}
        <FormControl
          variant="standard"
          sx={{ label: { fontSize: 22, color: 'black', fontWeight: '500' } }}>
          <InputLabel shrink htmlFor="last-name">
            Major
          </InputLabel>
          <SimpleSelectTest
            id="gender-select"
            value={major}
            onChange={handleChangeMajor}
            defaultValue="bachelor">
            <MenuItem value="bachelor">Bachelor</MenuItem>
            <MenuItem value="master">Master</MenuItem>
            <MenuItem value="doctorate">Doctorate</MenuItem>
          </SimpleSelectTest>
        </FormControl>
        {/**speciality */}
        <FormControl
          variant="standard"
          sx={{ label: { fontSize: 22, color: 'black', fontWeight: '500' } }}>
          <InputLabel shrink htmlFor="speciality">
            Speciality
          </InputLabel>
          <SimpleAutoCompleteTest
            disablePortal
            id="combo-box-demo"
            options={algerianSpecialities}
            defaultValue="Informatique"
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} />}
          />
        </FormControl>
      </Box>

      {/**gender */}
      <FormControl
        variant="standard"
        sx={{ label: { fontSize: 22, color: 'black', fontWeight: '500' } }}>
        <InputLabel shrink htmlFor="last-name">
          Gender
        </InputLabel>
        <SimpleSelectTest
          id="gender-select"
          value={gender}
          onChange={handleChangeGender}
          defaultValue="male">
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </SimpleSelectTest>
        {/**Password */}
        <FormControl
          variant="standard"
          sx={{ label: { fontSize: 22, color: 'black', fontWeight: '500' } }}>
          <InputLabel shrink htmlFor="last-name">
            Password
          </InputLabel>
          <SimpleInput
            placeholder="Your password"
            defaultValue="MyCurrentPassword"
            id="last-name"
            type="password"
          />
        </FormControl>
      </FormControl>
    </Box>
  );
};

export default InformationInputs;
