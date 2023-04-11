import React, { type FC, useState } from 'react';
import { type IImages } from '../types/IImages';
import CardImage from './CardImage';
import CardInfo from './CardInfo';
import Modal from './Modal';

interface CardProps {
  cardData: IImages;
  key: number;
}

const Card: FC<CardProps> = ({ cardData }: CardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="card" onClick={handleCardClick}>
        <CardImage item={cardData.urls} />
        {cardData.description !== null && (
          <div className="card_title" role="title">
            {cardData.description}
          </div>
        )}
        {cardData.description === null && (
          <div className="card_title" role="title">
            {cardData.alt_description}
          </div>
        )}
        <CardInfo user={cardData.user} date={cardData.created_at} />
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} cardData={cardData} />
    </>
  );
};

export default Card;
