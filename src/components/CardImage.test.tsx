import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import CardImage from './CardImage';

const testItem = {
  full: '../public/1.jpg',
  raw: '../public/1.jpg',
  regular: '../public/1.jpg',
  small: '../public/1.jpg',
  small_s3: '../public/1.jpg',
  thumb: '../public/1.jpg',
};

describe('Testing components CardImage', () => {
  afterAll(cleanup);
  beforeEach(() => {
    render(<CardImage item={testItem} />);
  });

  test('the card has a picture', () => {
    const picture = screen.getByRole('picture');
    expect(picture).toBeInTheDocument();
    expect(picture).toHaveClass('card_img');
  });
});
