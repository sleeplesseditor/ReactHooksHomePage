import React, { useState } from 'react';
import NewJoke from './components/joke';
import Stories from './components/stories';
import Tasks from './components/tasks';
import Gallery from './components/gallery';
import Matrix from './components/matrix';

function App() {
  const [userQuery, setUserQuery] = useState('');
  const [showGallery, setShowGallery] = useState(true);

  const updateUserQuery = event => {
    console.log('setUserQuery', userQuery)
    setUserQuery(event.target.value);
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      searchQuery()
    }
  }

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_');
  };

  const toggleShowGallery = () => {
    setShowGallery(!showGallery);
  }

  return (
    <div className="App">
      <h1>Good Morning</h1>
      <div className="form">
        <input 
          value={userQuery}
          onChange={updateUserQuery}
          onKeyPress={handleKeyPress}
        />
        <button
          onClick={searchQuery}
          className="search-button"
        >Search</button>
      </div>
      <hr />
      <NewJoke />
      <hr />
      <Tasks />
      <hr />
      <div>
        {
          showGallery ?  <Gallery /> : null
        }
        <button
          className="gallery-button"
          onClick={toggleShowGallery}
        >
          {showGallery ? 'Hide' : 'Show'} Gallery
        </button>
      </div>
      <hr />
      <Stories />
      <hr />
      <Matrix />
    </div>
  );
}

export default App;
