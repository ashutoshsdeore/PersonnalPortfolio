import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders heading', () => {
  const { getByText } = render(<App />);
  const heading = getByText(/React \+ TypeScript/i);
  expect(heading).toBeInTheDocument();
});
