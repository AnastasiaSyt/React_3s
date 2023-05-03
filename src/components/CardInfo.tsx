import React from 'react';
import { type IUser } from '../types/IImages';

interface CardProps {
  person?: string;
  date?: string;
  personImg?: string;
  user?: IUser;
}

const CardInfo: React.FC<CardProps> = ({ person, date, personImg, user }) => {
  return (
    <div className="card_info" role="card_info">
      {user !== null && (
        <div className="author" role="author">
          <img className="author_img" src={user?.profile_image.medium} role="avatar"></img>
          {user?.name}
        </div>
      )}
      {person !== null && personImg !== null && (
        <div className="author" role="author">
          <img className="author_img" src={personImg} role="avatar"></img>
          {person}
        </div>
      )}

      <div className="date" role="date">
        {new Date(date!).toLocaleDateString()}
      </div>
    </div>
  );
};

export default CardInfo;
