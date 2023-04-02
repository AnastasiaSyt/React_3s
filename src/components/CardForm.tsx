import React from 'react';
import CardImage from './CardImage';
import CardInfo from './CardInfo';

interface CardProps {
  imageCard: Blob | MediaSource | undefined;
  title: string;
  person: string;
  date: string;
}

const CardForm: React.FC<CardProps> = ({ title, person, date, imageCard }) => {
  return (
    <div className="card">
      <CardImage imageCard={imageCard} />
      <div className="card_title">{title}</div>
      <CardInfo person={person} date={date} />
    </div>
  );
};

export default CardForm;
