import React from 'react';

interface CardProps {
  person?: string;
  date?: string;
  personImg?: string;
}

const CardInfo: React.FC<CardProps> = ({ person, date, personImg }) => {
  return (
    <div className="card_info">
      <div className="author" role="author">
        <img className="author_img" src={personImg} role="avatar"></img>
        {person}
      </div>
      <div className="date" role="date">
        {date}
      </div>
    </div>
  );
};

export default CardInfo;
