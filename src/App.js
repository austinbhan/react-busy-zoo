import './App.css';
// import { useState } from 'react';
import SignSection from './SignSection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SignSection />
        <p>If you can read this you {`don't`} need glasses</p>
      </header>
    </div>
  );
}

export default App;
