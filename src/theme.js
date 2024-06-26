import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#5893df',
        },
        secondary: {
          main: '#2ec5d3',
        },
        background: {
          default: '#416b8e',
          paper: '#24344d',
        },
    },
});

export default theme;