import { createTheme } from '@mui/material/styles';

const theme = createTheme({
palette: {
    type: 'dark',
    primary: {
        main: '#455a64',
        contrastText: '#ffffff',
        dark: '#455a64',
        light: '#cfd8dc',
    },
    secondary: {
        main: '#ad1457',
    },
    background: {
        default: '#8497a0',
        paper: '#607d8b',
    },
    text: {
        primary: '#f5f5f5',
    },
    },
    typography: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    },
});

export default theme;