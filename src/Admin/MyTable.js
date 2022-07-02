import React from 'react';
import { namesTable } from './Data';

export default function MyTable() {

  
  console.log(namesTable);
  
  return (
    <>
      <div>
        {
          namesTable.map((person, i) => <p key={person.first_name + i}>
            {person.id}
            {person.first_name}
            {person.last_name} </p>)
        }
        Table One
      </div>
      <div>
        Table Two
      </div>
    </>
  );
}