import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from './SearchBar';
import React from 'react';

describe('Testing components SearchBar', () => {
  afterAll(cleanup);
  beforeEach(() => {
    render(<SearchBar />);
  });

  test('search bar has in document', () => {
    const search = screen.getByRole('search');
    expect(search).toBeInTheDocument();
  });

  test('searchBar has an input', () => {
    const input = screen.getByRole('search-input');
    expect(input).toBeInTheDocument();
  });
});
