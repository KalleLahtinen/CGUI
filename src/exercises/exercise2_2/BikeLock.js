import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { DigitInput, DigitContainer } from './BikeLockStyles';
import { useEffect } from 'react';

const BikeLock = () => {
  useEffect(() => {
    // Function to prevent the default wheel event action
    const preventScroll = (event) => {
      event.preventDefault();
    };
    
    // Add the event listener to the window object
    window.addEventListener('wheel', preventScroll, { passive: false });

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('wheel', preventScroll);
    };
  }, []);

  const [digits, setDigits] = useState([0, 0, 0, 0]);
  const [status, setStatus] = useState('default');
  const [message, setMessage] = useState('');
  const lockCode = [1, 2, 3, 4];

  const updateDigit = (index, delta) => {
    // Calculate next digits based on the interaction.
    setDigits((prevDigits) => {
      const nextDigits = prevDigits.map((digit, i) => 
        i === index ? Math.max(0, Math.min(9, digit + delta)) : digit
      );
  
      // Immediately use nextDigits for checking the guess.
      checkGuess(nextDigits);
      return nextDigits;
    });
  };

  const handleWheel = (index, event) => {
    event.preventDefault(); // Prevents the page from scrolling
    const { deltaY } = event; // Gets the vertical scroll amount
    if (deltaY < 0) {
      // Scrolling up
      updateDigit(index, 1);
    } else if (deltaY > 0) {
      // Scrolling down
      updateDigit(index, -1);
    }
  };

  const checkGuess = (nextDigits) => {
    const correctDigits = nextDigits.filter((digit, index) => digit === lockCode[index]).length;
  
    if (correctDigits === 4) {
        setMessage('Unlocked! You guessed the code!');
        setStatus('correct');  // This will apply the green color.
    } else if (correctDigits >= 2) {
        setMessage('Getting close!');
        setStatus('default'); // This will remove the green color.
    } else {
        // If not correct, reset the message and remove the green color by setting status to 'default'.
        setMessage('Keep guessing...');
        setStatus('default');
        }
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Typography variant="h4" gutterBottom>
        Bike Lock
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        {digits.map((digit, index) => (
          <DigitContainer key={index} onWheel={(e) => handleWheel(index, e)}>
            <Button onClick={() => updateDigit(index, 1)}>▲</Button>
            <DigitInput
              readOnly
              value={digit}
              status={status}
            />
            <Button onClick={() => updateDigit(index, -1)}>▼</Button>
          </DigitContainer>
        ))}
      </Box>
      <Typography variant="subtitle1" sx={{ mt: 2, minHeight: '24px', color: status === 'correct' ? 'success.main' : 'text.primary' }}>
        {message || ' '} {/* Ensures space is reserved */}
      </Typography>
    </Box>
  );
};

export default BikeLock;
