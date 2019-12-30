import { TextField, withStyles } from '@material-ui/core';

const ValidationTextField = withStyles({
  root: {
    '& label': {
      color: 'rgba(255,255,255,0.5) !important',
    },
    '& input': {
      color: 'rgba(255,255,255,1)',
    },
    '& input + fieldset': {
      borderColor: 'rgba(255,255,255,0.5)',
    },
    '& input:invalid + fieldset': {
      borderColor: '#ff0000 !important',
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important',
      borderColor: 'rgba(255,255,255,0.8) !important',
    },

    '&:not(:focus-within):hover': {
      '& label': {
        color: 'rgba(255,255,255,0.8)',
      },
    },
    '&:not(:focus-within):hover fieldset': {
      borderColor: 'rgba(255,255,255,0.8) !important',
      borderWidth: '2px !important',
    },
  },
})(TextField);

export default ValidationTextField;
