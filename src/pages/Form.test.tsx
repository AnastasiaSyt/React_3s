import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Form from './Form';
import store from '../redux/store';
import { Provider } from 'react-redux';

describe('Testing components Form', () => {
  afterAll(cleanup);
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
  });

  test('checking the parameters for submitting the form', () => {
    const title = screen.getByRole('form_title');
    fireEvent.input(title, 'A Quick Thought on The Nature of Travel');

    const date = screen.getByRole('form_date');
    fireEvent.change(date, { target: { value: '2000-01-01' } });

    const person = screen.getByRole('person-image');
    fireEvent.change(person, { target: { value: 'Tracey Wilson' } });

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    const imageFile = screen.getByRole('imageFile');
    const file = new File(['file test contents'], 'test.png', { type: 'image/png' });
    fireEvent.change(imageFile, { target: { files: [file] } });
  });
});
