import React from 'react';
import { type TCardItem } from '../types/card_type';
import '../styles/Card.css';

interface CardItemProps {
  item: TCardItem;
  imageCard?: Blob | MediaSource;
}

class CardItem extends React.Component<CardItemProps, object> {
  render() {
    return (
      <div className="card">
        <>
          <div className="card_img">
            {this.props.imageCard === null ||
              (this.props.imageCard === undefined && (
                <img className="card_img" src={this.props.item.image} />
              ))}
            {this.props.imageCard !== null && this.props.imageCard !== undefined && (
              <img
                src={URL.createObjectURL(this.props.imageCard)}
                alt="post image"
                className="card_img"
              />
            )}
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
