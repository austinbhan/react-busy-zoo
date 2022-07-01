import { render, screen } from '@testing-library/react';
import Animals from './Animals';


test ('pressing the fish button should render a fish emoji', () => {
  render(<Animals animal='fish'/>);
  const fishElement = screen.getByText(/🐟/i);
  expect(fishElement).toBeInTheDocument();

});