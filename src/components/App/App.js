import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

import Manatee from '../Manatee/Manatee';
import Narwhal from '../Narwhal/Narwhal';
import Whale from '../Whale/Whale';

function App() {
  return (
    <div className="wrapper">
      <h1>Marine Mammals</h1>

      <BrowserRouter>
        <nav>
          <ul>
            <li><NavLink to='/manatee'>Manatee</NavLink></li>
            <li><NavLink to='/narhwal'>Narwhal</NavLink></li>
            <li><NavLink to='/whale'>Whale</NavLink></li>
            <li><NavLink to='/whale/beluga'>Beluga Whale</NavLink></li>
            <li><NavLink to='/whale/blue'>Blue Whale</NavLink></li>
          </ul>
        </nav>

        <Routes>
          <Route path='/manatee' element={<Manatee />} />
          <Route path='/narhwal' element={<Narwhal />} />
          <Route path='/whale' element={<Whale />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;