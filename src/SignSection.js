import Sign from './Sign';
import BasicButtons from './CustomButtonMUI';
import React, { useState } from 'react';

export default function SignSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className = 'sign'>
      <Sign isOpen={isOpen} />
      <div>
        <BasicButtons onClick={() => setIsOpen(false)}>Close Zoo</BasicButtons>
        <BasicButtons onClick={() => setIsOpen(true)}>Open Zoo</BasicButtons>
      </div>

    </section>
  );
}