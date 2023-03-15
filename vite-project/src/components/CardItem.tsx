import React from 'react';
import '../styles/Card.css';

class CardItem extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card_img">
          <img className="card_img" src="../../public/1.jpg" />
        </div>
        <div className="card_tag">
          <p className="card_tag_text">Technology</p>
        </div>
        <div className="card_title">
          The Impact of Technology on the Workplace: How Technology is Changing
        </div>
        <div className="card_info">
          <div className="author">
            <img></img>
            Tracey Wilson
          </div>
          <div className="date">August 20, 2022</div>
        </div>
      </div>
    );
  }
}

export default CardItem;
