import './App.css';
import { useState } from 'react';
import SignSection from './SignSection';
import AnimalParade from './AnimalParade';

function App() {
  const [animalArray, setAnimalArray] = useState(['fish', 'raccoon', 'skunk', 'octopus']);

  function handleFish() {
    setAnimalArray([...animalArray, 'fish']);
  }

  return (
    <div className="App">
      <header className="App-header">
        <SignSection />
        <AnimalParade animals={animalArray}/>
        <div className='buttons'>
          <button onClick={handleFish}>Fish</button>
        </div>
      </header>
    </div>
  );
}

export default App;
