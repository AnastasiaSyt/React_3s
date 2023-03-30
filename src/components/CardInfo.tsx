import React from 'react';
import { type TCardItem } from '../types/card_type';

export default function CardInfo(props: { item: TCardItem }) {
  return (
    <div className="card_info">
      <div className="author">
        <img className="author_img" src={props.item.person_img}></img>
        {props.item.person}
      </div>
      <div className="date">{props.item.date}</div>
    </div>
  );
}
