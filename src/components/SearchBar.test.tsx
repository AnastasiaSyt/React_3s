import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import SearchBar from './SearchBar';
import { Provider } from 'react-redux';
import store from '../redux/store';

describe('Testing components SearchBar', () => {
  afterAll(cleanup);
  beforeEach(() => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
  });

  test('user can change search input', () => {
    const searchInput = screen.getByRole('search-input');
    fireEvent.input(searchInput, { target: { value: 'test string query' } });
    expect(searchInput).toHaveValue('test string query');
  });

  test('search starts after pressing the enter key', async () => {
    const mockDispatch = jest.fn();

    jest.mock('react-redux', () => ({
      useSelector: jest.fn(),
      useDispatch: () => mockDispatch,
    }));

    jest.mock('../services/api', () => ({
      useLazyQuery: () => [jest.fn(), { data: { results: [] }, isFetching: false }],
    }));

    const searchInput = screen.getByRole('search-input');
    fireEvent.change(searchInput, { target: { value: 'test string query' } });
    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' });
  });
});
