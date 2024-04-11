import React from 'react';
import { Box, Typography } from '@mui/material';

const HomePage = () => (
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" flexDirection="column">
    <Typography variant="h3" gutterBottom>👋🔒🏦 Welcome to the Vault! 💰🔑🛡️</Typography>
    <Typography variant="body1" textAlign="center">
      You'll find all the coursework for Creating Graphical User Interfaces as pages on this site!<br />Check the sidebar for the exercises.
    </Typography>
  </Box>
);

export default HomePage;