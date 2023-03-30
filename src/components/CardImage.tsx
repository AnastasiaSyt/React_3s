import React from 'react';
import { type TCardItem } from '../types/card_type';

export default function CardImage(props: {
  imageCard: Blob | MediaSource | null | undefined;
  item: TCardItem;
}) {
  return (
    <div className="card_img">
      {props.imageCard === null ||
        (props.imageCard === undefined && <img className="card_img" src={props.item.image} />)}
      {props.imageCard !== null && props.imageCard !== undefined && (
        <img src={URL.createObjectURL(props.imageCard)} alt="post image" className="card_img" />
      )}
    </div>
  );
}
