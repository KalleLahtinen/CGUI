import React from 'react';
import './timer.css';
import Button from '@mui/material/Button';
import { Stack, Typography, Container } from '@mui/material';

function Timer() {
  return (
    <div className="Timer">
      {/* Container to center content */}
      <Container maxWidth="sm" style={{ textAlign: 'center' }}>
        {/* Typography for the heading, automatically centered by the container's text alignment */}
        <Typography variant="h5" component="h2" style={{ color: '#FFF', marginBottom: '20px' }}>
          Set timer for morning
        </Typography>

        {/* Stack for the buttons, centered horizontally and vertically */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center" // Center items horizontally in the stack
          alignItems="center" // Center items vertically in the stack
        >
          <Button variant="outlined" style={{ borderColor: '#FFF', color: '#FFF' }}>8</Button>
          <Button variant="outlined" style={{ borderColor: '#FFF', color: '#FFF' }}>15</Button>
          <Button variant="contained" style={{ backgroundColor: '#4CAF50', color: '#FFF' }}>Set</Button>
        </Stack>
      </Container>
    </div>
  );
}

export default Timer;