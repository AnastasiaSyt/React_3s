import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import CardForm from './CardForm';

const testImage = {
  full: '../public/1.jpg',
  raw: '../public/1.jpg',
  regular: '../public/1.jpg',
  small: '../public/1.jpg',
  small_s3: '../public/1.jpg',
  thumb: '../public/1.jpg',
};

const testItem = {
  id: 1,
  image: testImage,
  title: 'Nature is a teacher – Just sit quietly under a tree',
  personImg: '../public/tracy.png',
  person: 'Tracey Wilson',
  date: 'February 20, 2023',
};

describe('Testing components CardForm', () => {
  afterAll(cleanup);
  beforeEach(() => {
    render(
      <CardForm
        imageCard={undefined}
        title={testItem.title}
        person={testItem.person}
        personImg={testItem.personImg}
        date={testItem.date}
      />
    );
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
    expect(picture).toHaveClass('card_img');
  });

  test('the card has an author', () => {
    const author = screen.getByRole('author');
    expect(author).toBeInTheDocument();
    expect(author).toHaveClass('author');
  });

  test('the card has a date', () => {
    const date = screen.getByRole('date');
    expect(date).toBeInTheDocument();
    expect(date).toHaveTextContent(testItem.date);
  });

  test("the card has a person's avatar", () => {
    const avatar = screen.getByRole('avatar');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveClass('author_img');
  });
});
