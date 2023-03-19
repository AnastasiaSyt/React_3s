import React from 'react';
import { TCardItem } from '../types/card_type';
import '../styles/Card.css';

interface CardItemProps {
  item: TCardItem;
}

class CardItem extends React.Component<CardItemProps, object> {
  constructor(props: CardItemProps) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <>
          <div className="card_img">
            <img className="card_img" src={this.props.item.image} />
          </div>
          <div className="card_title">{this.props.item.title}</div>
          <div className="card_info">
            <div className="author">
              <img className="author_img" src={this.props.item.person_img}></img>
              {this.props.item.person}
            </div>
            <div className="date">{this.props.item.date}</div>
          </div>
        </>
      </div>
    );
  }
}

export default CardItem;
