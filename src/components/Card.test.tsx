import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { type IImages } from '../types/IImages';
import Card from './Card';

const testImages: IImages = {
  alt_description: 'black bicycle on green grass field near sea during daytime',
  blur_hash: 'LaK1ENkUNLWC_1ofR.js0URokAbF',
  color: '#c0a68c',
  created_at: '2021-08-26T09:51:10Z',
  current_user_collections: [],
  description: 'Sunset and blue sky stripes on Aruba island. ',
  height: 2796,
  id: '_yZAtLUP7q0',
  liked_by_user: false,
  likes: 4,
  links: {
    download:
      'https://unsplash.com/photos/_yZAtLUP7q0/download?ixid=Mnw0MzI2MzV8MHwxfHNlYXJjaHwxfHx1bmRlZmluZWR8ZW58MHx8fHwxNjgxNTk1NjU2',
    download_location:
      'https://api.unsplash.com/photos/_yZAtLUP7q0/download?ixid=Mnw0MzI2MzV8MHwxfHNlYXJjaHwxfHx1bmRlZmluZWR8ZW58MHx8fHwxNjgxNTk1NjU2',
    html: 'https://unsplash.com/photos/_yZAtLUP7q0',
    self: 'https://api.unsplash.com/photos/_yZAtLUP7q0',
  },
  promoted_at: null,
  sponsorship: null,
  tags: [
    { type: 'search', title: 'aruba' },
    { type: 'landing_page', title: 'yellow' },
    { type: 'search', title: 'bicycle' },
  ],
  topic_submissions: {},
  updated_at: '2023-04-15T11:25:17Z',
  urls: {
    full: 'https://images.unsplash.com/photo-1629971459025-2c73de204a6d?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0MzI2MzV8MHwxfHNlYXJjaHwxfHx1bmRlZmluZWR8ZW58MHx8fHwxNjgxNTk1NjU2&ixlib=rb-4.0.3&q=85',
    raw: 'https://images.unsplash.com/photo-1629971459025-2c73de204a6d?ixid=Mnw0MzI2MzV8MHwxfHNlYXJjaHwxfHx1bmRlZmluZWR8ZW58MHx8fHwxNjgxNTk1NjU2&ixlib=rb-4.0.3',
    regular:
      'https://images.unsplash.com/photo-1629971459025-2c73de204a6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MzI2MzV8MHwxfHNlYXJjaHwxfHx1bmRlZmluZWR8ZW58MHx8fHwxNjgxNTk1NjU2&ixlib=rb-4.0.3&q=80&w=1080',
    small:
      'https://images.unsplash.com/photo-1629971459025-2c73de204a6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MzI2MzV8MHwxfHNlYXJjaHwxfHx1bmRlZmluZWR8ZW58MHx8fHwxNjgxNTk1NjU2&ixlib=rb-4.0.3&q=80&w=400',
    small_s3:
      'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1629971459025-2c73de204a6d',
    thumb:
      'https://images.unsplash.com/photo-1629971459025-2c73de204a6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MzI2MzV8MHwxfHNlYXJjaHwxfHx1bmRlZmluZWR8ZW58MHx8fHwxNjgxNTk1NjU2&ixlib=rb-4.0.3&q=80&w=200',
  },
  user: {
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
    social: {
      instagram_username: 'lexmelony',
      portfolio_url: 'https://www.lexmelony.com',
      twitter_username: null,
      paypal_email: null,
    },
    total_collections: 20,
    total_likes: 15,
    total_photos: 90,
    twitter_username: null,
    updated_at: '2023-04-15T16:11:14Z',
    username: 'lexmelony',
  },
  width: 3443,
};

describe('Testing components Card', () => {
  afterAll(cleanup);
  beforeEach(() => {
    render(<Card cardData={testImages} key={1} />);
  });

  test('the card has an title', () => {
    const title = screen.getByRole('title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('card_title');
  });

  test('the card has component CardImage', () => {
    const image = screen.getByRole('picture');
    expect(image).toBeInTheDocument();
    expect(image).toHaveClass('card_img');
  });

  test('the card has component CardInfo', () => {
    const image = screen.getByRole('card_info');
    expect(image).toBeInTheDocument();
    expect(image).toHaveClass('card_info');
  });
});
