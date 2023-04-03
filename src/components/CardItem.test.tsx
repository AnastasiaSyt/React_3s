import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardItem from './CardItem';
import React from 'react';

const testItem = {
  id: 1,
  image: '../public/1.jpg',
  title: 'Nature is a teacher – Just sit quietly under a tree',
  person_img: '../public/tracy.png',
  person: 'Tracey Wilson',
  date: 'February 20, 2023',
};

describe('Testing components CardItems', () => {
  afterAll(cleanup);
  beforeEach(() => {
    render(<CardItem item={testItem} />);
  });

  test('the card has a title', () => {
    const title = screen.getByRole('title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('card_title');
    expect(title).toHaveTextContent(testItem.title);
  });

  test('the card has a picture', () => {
    const picture = screen.getByRole('picture');
    expect(picture).toBeInTheDocument();
    // expect(picture).toHaveAttribute('src', testItem.image);
    // expect(picture).toHaveAttribute('alt', 'post image');
    expect(picture).toHaveClass('card_img');
  });

  test('the card has an author', () => {
    const author = screen.getByRole('author');
    expect(author).toBeInTheDocument();
    expect(author).toHaveClass('author');
    expect(author).toHaveTextContent(testItem.person);
  });

  test('the card has a date', () => {
    const date = screen.getByRole('date');
    expect(date).toBeInTheDocument();
    expect(date).toHaveTextContent(testItem.date);
  });

  test("the card has a person's avatar", () => {
    const avatar = screen.getByRole('avatar');
    expect(avatar).toBeInTheDocument();
    // expect(avatar).toHaveAttribute('src', testItem.person_img);
    expect(avatar).toHaveClass('author_img');
  });
});
