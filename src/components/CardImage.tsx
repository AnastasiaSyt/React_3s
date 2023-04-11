import React from 'react';
import { type IUrls } from '../types/IImages';

interface CardProps {
  imageCard?: Blob | MediaSource | undefined;
  item?: IUrls;
}

const CardImage: React.FC<CardProps> = ({ imageCard, item }) => {
  return (
    <div className="card_img" role="picture">
      {imageCard === null ||
        (item?.regular != null && <img className="card_img" src={item.regular} alt="post image" />)}
      {imageCard !== null && imageCard !== undefined && (
        <img src={URL.createObjectURL(imageCard)} alt="post image" className="card_img" />
      )}
    </div>
  );
};

export default CardImage;
