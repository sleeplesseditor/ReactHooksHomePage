import React, { useState } from 'react';

function App() {
  const [userQuery, setUserQuery] = useState('');

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
        >Search</button>
      </div>
    </div>
  );
}

export default App;
