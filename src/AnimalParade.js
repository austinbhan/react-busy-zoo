import React from 'react';
import Animals from './Animals';

export default function AnimalParade({ animals }) {
  return (
    <div className = "parade">
      {
        animals.map((animal, i) => <Animals animal={animal} key={animal + i} />)
      }
    </div>
  );
}