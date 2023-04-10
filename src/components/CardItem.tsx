import React from 'react';
import CardImage from './CardImage';
import CardInfo from './CardInfo';
import { type IImages } from '../types/IImages';

interface CardItemProps {
  item: IImages;
  imageCard?: Blob | MediaSource;
}

export default function CardItem(item: CardItemProps) {
  return (
    <div className="card">
      <CardImage imageCard={item.imageCard} item={props.item} />
      <div className="card_title" role="title">
        {item.description}
      </div>
      <CardInfo
        person={props.item.person}
        date={props.item.date}
        personImg={props.item.personImg}
      />
    </div>
  );
}
