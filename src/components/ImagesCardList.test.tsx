import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import ImagesCardList from './ImagesCardList';
import store from '../redux/store';
import { Provider } from 'react-redux';

describe('Testing components ImageCardList', () => {
  afterAll(cleanup);
  beforeEach(() => {
    render(
      <Provider store={store}>
        <ImagesCardList />
      </Provider>
    );
  });

  test('component renders', () => {
    const cardList = screen.getByRole('cards');
    expect(cardList).toBeInTheDocument();
  });
});
