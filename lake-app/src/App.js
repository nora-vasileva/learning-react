import React from 'react';
import './App.css';

const App = ({ lakes }) => (
  <ul>
    {lakes.map(lake =>
      <li key={lake.id}>{lake.name} | Trailhead: {lake.trailhead}</li>
    )}
  </ul>
)

export default App;
