/* eslint-disable @typescript-eslint/naming-convention */
import React, { type FC } from 'react';
import { type IImages } from '../types/IImages';
import CardInfo from './CardInfo';
import CardImage from './CardImage';

const Cards: FC<{ cards: IImages[] }> = ({ cards }) => {
  return (
    <div className="wrapper">
      <div className="cards" role="cards">
        {cards.map(({ description, created_at, id, urls, user }) => {
          return (
            <div className="card" key={id}>
              <CardImage item={urls} />
              <div className="card_title" role="title">
                {description}
              </div>
              <CardInfo user={user} date={created_at} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
