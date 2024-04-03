import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';

export const DigitInput = styled(InputBase)(({ theme, status }) => ({
  width: '60px',
  height: '60px',
  margin: '0 8px',
  fontSize: '2rem',
  textAlign: 'center',
  lineHeight: '60px', // Adjust line height to vertically center the text
  borderRadius: '10px',
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: status === 'default' ? 'transparent' :
                   status === 'correct' ? theme.palette.success.light :
                   theme.palette.error.light,
  '& input': {
    textAlign: 'center',
    padding: '0',
    pointerEvents: 'none', // Prevents focusing the input directly
  },
}));

export const DigitContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});
