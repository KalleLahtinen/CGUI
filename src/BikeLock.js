import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { DigitInput } from './BikeLockStyles'; // Import the styled component

const BikeLock = () => {
  const [digits, setDigits] = useState(Array(4).fill(''));
  const [status, setStatus] = useState('default');
  const [message, setMessage] = useState('');
  const lockCode = ['1', '2', '3', '4'];

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;
      if (key >= 0 && key <= 9) {
        updateDigits(key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [digits]);

  const updateDigits = (num) => {
    const index = digits.findIndex(digit => digit === '');
    if (index !== -1) {
      const newDigits = [...digits];
      newDigits[index] = num;
      setDigits(newDigits);

      if (newDigits.every(digit => digit !== '')) {
        checkGuess(newDigits.join(''));
      }
    }
  };

  const resetLock = () => {
    setDigits(Array(4).fill(''));
    setMessage('');
    setStatus('default');
  };

  const checkGuess = (guess) => {
    if (guess === lockCode.join('')) {
      setMessage('Unlocked! You guessed the code!');
      setStatus('correct');
    } else {
      setMessage('Wrong code. Try again!');
      setStatus('wrong');
      setTimeout(() => {
        resetLock();
      }, 1500);
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
      <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <Typography variant="h4" gutterBottom>
          Bike Lock
        </Typography>
        <Box sx={{ display: 'flex' }}>
          {digits.map((digit, index) => (
            <DigitInput
              key={index}
              readOnly
              disableUnderline
              value={digit}
              inputProps={{ 'aria-label': `digit-${index}` }}
              status={status}
            />
          ))}
        </Box>
        <Typography variant="subtitle1" sx={{ mt: 2, height: '24px', color: status === 'wrong' ? 'error.main' : 'success.main' }}>
          {message}
        </Typography>
      </Box>
    </Box>
  );
};

export default BikeLock;