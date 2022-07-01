import { fireEvent, render, screen } from '@testing-library/react';
import SignSection from './SignSection';

test('pressing the open button should render open sign text', () => {
  render(<SignSection />);
  const greetingElementAtLoad = screen.getByText('SORRY THE ZOO IS CLOSED');
  expect(greetingElementAtLoad).toBeInTheDocument();

  const inputEl = screen.getByText('Open Zoo');

  fireEvent.click(inputEl);

  const updatedSign = screen.getByText('IT IS OPEN');

  expect(updatedSign).toBeInTheDocument();
});