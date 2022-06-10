import './App.css';
// import { useState } from 'react';
import SignSection from './SignSection';
import AnimalParade from './AnimalParade';
import { Animals } from './Animals.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SignSection />
        <AnimalParade animals={ Animals }/>
      </header>
    </div>
  );
}

export default App;
