// import './App.css';
import React from 'react';
import NavBar from './NavBar';
import MediaContainer from './MediaContainer';

import reviews from '../data/reviews.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MediaContainer reviews={reviews}/>
    </div>
  );
}

export default App;
