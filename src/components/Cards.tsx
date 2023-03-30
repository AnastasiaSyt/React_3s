import { CardData } from '../cards_data';
import React, { useState } from 'react';
import '../styles/Card.css';
import CardItem from './CardItem';
import { type TCardItem } from 'types/card_type';

function Cards() {
  const [cards] = useState(CardData);

  return (
    <div className="wrapper">
      <>
        <h1 className="main_title">Latest Post</h1>
        <div className="cards">
          {cards.map((item: TCardItem) => (
            <CardItem item={item} key={item.id} />
          ))}
        </div>
      </>
    </div>
  );
}

export default Cards;
