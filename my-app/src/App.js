import React from 'react';
import './App.css';
import Meme from './components/Meme';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meme Generator App</h1>
        <Meme/>
      </header>
    </div>
  );
}

export default App;
