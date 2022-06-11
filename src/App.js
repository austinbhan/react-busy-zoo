import './App.css';
import { useState } from 'react';
import SignSection from './SignSection';
import AnimalParade from './AnimalParade';

function App() {
  const [animalArray, setAnimalArray] = useState(['fish', 'raccoon', 'skunk', 'octopus']);
  const [dundeeSize, setDundeeSize] = useState(10);
  const [irwinSize, setIrwinSize] = useState(10);   

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
        <div className="australian-crocodiles">
          <div className="dundee">
            <img src="crocodile-dundee.png" style={{ width: `${dundeeSize * 10}px` }} />
            <div className='buttons'>
              <button onClick={() => setDundeeSize(dundeeSize - 1)}>That&apos;s not a knife!</button>
              <button onClick={() => setDundeeSize(dundeeSize + 1)}>Now That&apos;s a knife!</button>
            </div>
          </div>
          <div className="irwin">
            <img src="crocodile-hunter.png" style={{ width: `${irwinSize * 10}px` }} />
            <div className="buttons">
              <button onClick={() => setIrwinSize(irwinSize - 1)}>Crikey!</button>
              <button onClick={() => setIrwinSize(irwinSize + 1)}>Lyuukathat beeoouty</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
