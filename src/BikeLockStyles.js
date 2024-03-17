import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

export const DigitInput = styled(InputBase)(({ theme, status }) => ({
  width: '60px',
  height: '60px',
  margin: '0 8px',
  fontSize: '2rem',
  textAlign: 'center',
  borderRadius: '10px',
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: status === 'default' ? 'transparent' :
                   status === 'correct' ? theme.palette.success.light :
                   theme.palette.error.light,
  transition: theme.transitions.create(['background-color', 'border-color', 'box-shadow']),
  '& input': {
    textAlign: 'center',
    padding: '10px 0',
  },
  '&:focus-within': {
    borderColor: status === 'correct' ? theme.palette.success.main : 
                  status === 'wrong' ? theme.palette.error.main :
                  theme.palette.primary.main,
    boxShadow: `0 0 0 2px ${status === 'correct' ? theme.palette.success.light : 
                            status === 'wrong' ? theme.palette.error.light :
                            theme.palette.primary.light}`,
  },
}));