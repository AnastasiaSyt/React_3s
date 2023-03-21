import { render, screen } from '@testing-library/react';
import React from 'react';
import Footer from './Footer';
import '@testing-library/jest-dom';

test('renders header', () => {
  render(<Footer />);
  const headerElement = screen.getByText(/AnastasiaSyt/i);
  expect(headerElement).toBeInTheDocument();
});
