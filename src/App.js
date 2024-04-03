import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Import the Layout and other components
import Layout from './Layout';
import HomePage from './HomePage';
import NoPage from './NoPage'; // A NoPage for 404 errors
import Exercise1_2 from './exercises/exercise1_2/Exercise1_2';
import Exercise1_3 from './exercises/exercise1_3/Exercise1_3';
import Exercise2_2 from './exercises/exercise2_2/BikeLock';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="exercise1_2" element={<Exercise1_2 />} />
          <Route path="exercise1_3" element={<Exercise1_3 />} />
          <Route path="exercise2_2" element={<Exercise2_2 />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}