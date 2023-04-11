import React from 'react';
import CardImage from './CardImage';
import CardInfo from './CardInfo';

interface CardProps {
  imageCard: Blob | MediaSource | undefined;
  title: string;
  person: string;
  personImg: string;
  date: string;
}

const CardForm: React.FC<CardProps> = ({ title, person, date, imageCard, personImg }) => {
  return (
    <div className="card">
      <CardImage imageCard={imageCard} />
      <div className="card_title" role="title">
        {title}
      </div>
      <CardInfo person={person} personImg={personImg} date={date} />
    </div>
  );
};

export default CardForm;
