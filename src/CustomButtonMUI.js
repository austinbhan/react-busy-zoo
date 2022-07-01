import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons({ onClick, children }) {
  return (
    <Button variant="contained" onClick={onClick}>{children}</Button>
  );
}
