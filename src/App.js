import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button } from '@mui/material';

// Pages
const Home = () => (
  <div style={{ padding: 20 }}>
    <h2>Home Page</h2>
    <Link to="/about" style={{ textDecoration: 'none' }}>
      <Button variant="contained" color="primary">
        Go to About
      </Button>
    </Link>
  </div>
);

const About = () => (
  <div style={{ padding: 20 }}>
    <h2>About Page</h2>
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Button variant="contained" color="secondary">
        Go to Home
      </Button>
    </Link>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
