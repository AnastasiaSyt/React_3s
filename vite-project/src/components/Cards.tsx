import { CardData } from '../cards_data';
import React from 'react';
import '../styles/Card.css';
import CardItem from './CardItem';
import { TCardItem } from 'types/card_type';

interface CardState {
  cards: TCardItem[];
}

class Cards extends React.Component<object, CardState> {
  constructor(props: object) {
    super(props);
    this.state = {
      cards: CardData,
    };
  }
  render() {
    return (
      <div className="wrapper">
        <>
          <h1 className="main_title">Latest Post</h1>
          <div className="cards">
            {this.state.cards.map((item: TCardItem) => (
              <CardItem item={item} key={item.id} />
            ))}
          </div>
        </>
      </div>
    );
  }
}

export default Cards;
