import Select from '@mui/material/Select';
import Autocomplete from '@mui/material/Autocomplete';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

export const SimpleInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 5,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
    border: '1px solid',
    borderColor: theme.palette.mode === 'light' ? '#7645DF36' : '#7645DF36',
    fontSize: 16,
    width: '330px',
    height: '15px',
    padding: '10px 12px',
    marginBottom: '22px',
    marginRight : '10px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
  },
}));

export const LargeInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 5,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
    border: '1px solid',
    borderColor: theme.palette.mode === 'light' ? '#7645DF36' : '#7645DF36',
    fontSize: 16,
    width: '735px',
    height: '15px',
    padding: '10px 12px',
    marginBottom: '22px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
  },
}));


export const SimpleSelectTest = styled(Select)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '&::before, &::after': {
    display: 'none',
  },
  '& .MuiSelect-select': {
    borderRadius: 5,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
    border: '1px solid',
    borderColor: theme.palette.mode === 'light' ? '#7645DF36' : '#7645DF36',
    fontSize: 16,
    width: '324px',
    height: '15px',
    padding: '5px 12px',
    marginBottom: '22px',
    marginRight: '10px',
  },
  /* Change the position of the default arrow icon */
  '& .MuiSelect-icon': {
    position: 'absolute',
    right: '10px',
    top: '20px',
    transform: 'translateY(-50%)',
  },
}));

export const SimpleAutoCompleteTest = styled(Autocomplete)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiAutocomplete-root': {
    borderRadius: 5,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
    border: '1px solid',
    borderColor: theme.palette.mode === 'light' ? '#7645DF36' : '#7645DF36',
    marginRight : '10px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
  },
  '& .MuiAutocomplete-inputRoot': {
    width: '356px',
    height: '35px',
    backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
    fontSize: 16,
    padding: '10px 12px',
    marginBottom: '22px',
    marginRight: '10px',
  },
  '& .MuiInputBase-input': {
    backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
    fontSize: 17,
    width: '290px !important',
    position: 'absolute',
    left : '0'
   }
}));
export const SimpleSelect = styled(Select)`
  .MuiSelect-select {
    border: '1px solid #7645DF36';
    borderRadius: '5px';
    padding: '10px 12px';
    width: '295px';
    height: '15px';
    fontSize: '16px';
    backgroundColor: '#F3F6F9';
    color: '#000000';
  }

  .MuiSelect-select:focus {
    border: '1px solid #7645DF36';
    borderRadius: '5px';
    padding: '10px 12px';
    width: '295px';
    height:'15px';
    fontSize: '16px';
    backgroundColor: '#F3F6F9';
    color: '#000000';
    outline: 'none';
  }

  .MuiSelect-icon {
    color: '#7645DF36';
  }

  .MuiSelect-iconOpen {
    color: '#7645DF36';
  }
`;

export const SimpleAutoComplete = styled(Autocomplete)`
  .MuiAutocomplete-root {
    border: '1px solid #7645DF36';
    borderRadius: '5px';
    padding: '10px 12px';
    width: '295px';
    height: '15px';
    fontSize: '16px';
    backgroundColor: '#F3F6F9';
    color:'#000000';
  }

  .MuiAutocomplete-root:focus {
    border: '1px solid #7645DF36';
    borderRadius:' 5px';
    padding: '10px 12px';
    width: '295px';
    height: '15px';
    fontSize: '16px';
    backgroundColor: '#F3F6F9';
    color: '#000000';
    outline: 'none';
  }

  .MuiAutocomplete-input {
    color: '#000000';
  }

  .MuiAutocomplete-popupIndicator {
    color: '#7645DF36';
  }

  .MuiAutocomplete-option {
    color: '#000000';
  }

  .MuiAutocomplete-option:hover {
    backgroundColor:' #7645DF36';
    color: '#FFFFFF';
  }

  .MuiAutocomplete-option.Mui-selected {
    backgroundColor: '#7645DF36';
    color: '#FFFFFF';
  }
`;
