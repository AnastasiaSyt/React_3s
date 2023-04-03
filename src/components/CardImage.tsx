import React from 'react';
import { type TCardItem } from '../types/card_type';

interface CardProps {
  imageCard?: Blob | MediaSource | undefined;
  item?: TCardItem;
}

const CardImage: React.FC<CardProps> = ({ imageCard, item }) => {
  return (
    <div className="card_img" role="picture">
      {imageCard === null ||
        (item?.image != null && <img className="card_img" src={item.image} alt="post image" />)}
      {imageCard !== null && imageCard !== undefined && (
        <img src={URL.createObjectURL(imageCard)} alt="post image" className="card_img" />
      )}
    </div>
  );
};

export default CardImage;
