// import './App.css';
import React from 'react';
import Nav from './Nav';
import MediaContainer from './MediaContainer';

import data from '../data';

function App() {
  return (
    <div className="App">
      <Nav />
      <MediaContainer data={data}/>
    </div>
  );
}

export default App;
