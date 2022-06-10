import './App.css';
import { useState } from 'react';
import SignSection from './SignSection';
import AnimalParade from './AnimalParade';
import AnimalSize from './AnimalSize';

function App() {
  const [animalArray, setAnimalArray] = useState(['fish', 'raccoon', 'skunk', 'octopus']);

  function handleFish() {
    setAnimalArray([...animalArray, 'fish']);
  }

  function handleRaccoon() {
    setAnimalArray([...animalArray, 'raccoon']);
  }
  function handleSkunk() {
    setAnimalArray([...animalArray, 'skunk']);
  }
  function handleOctopus() {
    setAnimalArray([...animalArray, 'octopus']);
  }



  return (
    <div className="App">
      <header className="App-header">
        <SignSection />
        <AnimalParade animals={animalArray}/>
        <div className='buttons'>
          <button onClick={handleFish}>Fish</button>
          <button onClick={handleRaccoon}>Raccoon</button>
          <button onClick={handleSkunk}>Skunk</button>
          <button onClick={handleOctopus}>Octopus</button>
        </div>
        <AnimalSize />
      </header>
    </div>
  );
}

export default App;
