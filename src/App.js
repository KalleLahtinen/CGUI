import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Import the Layout and other components
import Layout from './Layout';
import HomePage from './HomePage';
import NoPage from './NoPage'; // A NoPage for 404 errors
import Timer from './exercises/w1e2/Timer';
import Routers from './exercises/w1e3/Routers';
import BikeLock from './exercises/w2e2/BikeLock';
import Greeting from './exercises/w2e3/Greeting';
import BikeLockImproved from './exercises/w3e1/BikeLockImproved';
import BouncingShapes from './exercises/w3e3/BouncingShapes';

export default function App() {
  return (
    <BrowserRouter basename="/CGUI">
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="week1-exercise2" element={<Timer />} />
          <Route path="week1-exercise3" element={<Routers />} />
          <Route path="week2-exercise2" element={<BikeLock />} />
          <Route path="week2-exercise3" element={<Greeting />} />
          <Route path="week3-exercise1" element={<BikeLockImproved />} />
          <Route path="week3-exercise3" element={<BouncingShapes />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}