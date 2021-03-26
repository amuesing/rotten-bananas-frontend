// import './App.css';
import React from 'react';
import MediaContainer from './media/MediaContainer.js';

import reviews from '../data/reviews.js';

function App() {
  return (
    <div className="App">
      <MediaContainer reviews={reviews}/>
    </div>
  );
}

export default App;
