import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { type ITag } from '../types/IImages';
import Tag from './Tag';

const testTag: ITag = { type: 'search', title: 'aruba' };

describe('Testing components CardInfo', () => {
  afterAll(cleanup);
  beforeEach(() => {
    render(<Tag tag={testTag} key={1} />);
  });

  test('the tag has text', () => {
    const tag = screen.getByRole('tag');
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveClass('tag');
  });
});
