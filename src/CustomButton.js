import React from 'react';

export default function CustomButton({ children, onClick }) {
  return (
    <button onClick={onClick} variant="contained">
      {children}
    </button>
  );
}