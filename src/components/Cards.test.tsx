import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import Cards from './Cards';

describe('Testing components Cards', () => {
  afterAll(cleanup);
  beforeEach(() => {
    render(<Cards />);
  });

  test('check number of cards', () => {
    const cards = screen.getByRole('cards');
    expect(cards.children.length).toBe(9);
  });
});
