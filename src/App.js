import './App.css';
import { useState } from 'react';
import SignSection from './SignSection';
import AnimalParade from './AnimalParade';
import BasicButtons from './CustomButtonMUI';

import Admin from './Admin/Admin';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


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
    <>
      <Router>
        <Link to='Admin'>Admin Page</Link>
        <Link to='/'> Home</Link>
        <Routes>
          <Route path='Admin' element={<Admin />} />
        </Routes>
      </Router>
      
      <div className="App">
        <header className="App-header">
          <SignSection />
          <AnimalParade animals={animalArray}/>
          <div className='buttons'>
            <BasicButtons onClick={handleFish}>Fish</BasicButtons>
            <BasicButtons onClick={handleRaccoon}>Raccoon</BasicButtons>
            <BasicButtons onClick={handleSkunk}>Skunk</BasicButtons>
            <BasicButtons onClick={handleOctopus}>Octopus</BasicButtons>
          </div>
          <div className="australian-crocodiles">
            <div className="dundee">
              <img src="crocodile-dundee.png" style={{ width: `${dundeeSize * 10}px` }} />
              <div className='buttons'>
                <BasicButtons onClick={() => setDundeeSize(dundeeSize - 1)}>That&apos;s not a knife!</BasicButtons>
                <BasicButtons onClick={() => setDundeeSize(dundeeSize + 1)}>Now That&apos;s a knife!</BasicButtons>
              </div>
            </div>
            <div className="irwin">
              <img src="crocodile-hunter.png" style={{ width: `${irwinSize * 10}px` }} />
              <div className="buttons">
                <BasicButtons onClick={() => setIrwinSize(irwinSize - 1)}>Crikey!</BasicButtons>
                <BasicButtons onClick={() => setIrwinSize(irwinSize + 1)}>Lyuukathat beeoouty</BasicButtons>
              </div>
            </div>
          </div>
        </header>
      </div>

    </>

  );
}

export default App;
