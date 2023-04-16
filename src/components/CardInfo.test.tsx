import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import CardInfo from './CardInfo';
import { type IUser } from '../types/IImages';

const testUser: IUser = {
  accepted_tos: true,
  bio: "Hello,\r\nI'm Lex.  \r\nMy passion is photography and video production.\r\nThe world we live in is a crazy mix of beauty, love, fear, and a thousand other elements that words simply cannot give justice to.\r\n",
  first_name: 'Lex',
  for_hire: true,
  id: 'kQqG2JmhSu0',
  instagram_username: 'lexmelony',
  last_name: 'Melony',
  links: {
    followers: 'https://api.unsplash.com/users/lexmelony/followers',
    following: 'https://api.unsplash.com/users/lexmelony/following',
    html: 'https://unsplash.com/@lexmelony',
    likes: 'https://api.unsplash.com/users/lexmelony/likes',
    photos: 'https://api.unsplash.com/users/lexmelony/photos',
    portfolio: 'https://api.unsplash.com/users/lexmelony/portfolio',
    self: 'https://api.unsplash.com/users/lexmelony',
  },
  location: 'London',
  name: 'Lex Melony',
  portfolio_url: 'https://www.lexmelony.com',
  profile_image: {
    large:
      'https://images.unsplash.com/profile-1680507003815-474c0b1af92b?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
    medium:
      'https://images.unsplash.com/profile-1680507003815-474c0b1af92b?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
    small:
      'https://images.unsplash.com/profile-1680507003815-474c0b1af92b?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
  },
  username: 'lexmelony',
  social: undefined,
  total_collections: 0,
  total_likes: 0,
  total_photos: 0,
  updated_at: '',
};

const testDate = '2021-08-26T09:51:10Z';

describe('Testing components CardInfo', () => {
  afterAll(cleanup);
  beforeEach(() => {
    render(<CardInfo user={testUser} date={testDate} />);
  });

  test('the card has date', () => {
    const date = screen.getByRole('date');
    expect(date).toBeInTheDocument();
    expect(date).toHaveClass('date');
  });
});
