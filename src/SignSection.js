import Sign from './Sign';
import CustomButton from './CustomButton';
import React, { useState } from 'react';

export default function SignSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className = 'sign'>
      <Sign isOpen={isOpen} />
      <div>
        <CustomButton onClick={() => setIsOpen(false)}>Close Zoo</CustomButton>
        <CustomButton onClick={() => setIsOpen(true)}>Open Zoo</CustomButton>
      </div>

    </section>
  );
}