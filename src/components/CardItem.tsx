import React from 'react';
import { type TCardItem } from '../types/card_type';
import CardImage from './CardImage';
import CardInfo from './CardInfo';

interface CardItemProps {
  item: TCardItem;
  imageCard?: Blob | MediaSource;
}

export default function CardItem(props: CardItemProps) {
  return (
    <div className="card">
      <CardImage imageCard={props.imageCard} item={props.item} />
      <div className="card_title" role="title">
        {props.item.title}
      </div>
      <CardInfo person={props.item.person} date={props.item.date} />
    </div>
  );
}
