import React, { type FC } from 'react';
import { type IImages } from '../types/IImages';
import Card from './Card';

const Cards: FC<{ cards: IImages[] }> = ({ cards }) => {
  return (
    <div className="wrapper">
      <div className="cards" role="cards">
        {cards.map((cardData: IImages, index: number) => {
          return <Card cardData={cardData} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Cards;
