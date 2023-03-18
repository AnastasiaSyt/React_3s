import React from 'react';
import { TTags } from 'types/card_type';
import '../styles/SearchBar.css';

class Tag extends React.Component {
  render() {
    return (
      <div className="card_tag">
        <>
          {console.log(this.props)}
          <p className="card_tag_text">{this.props.item.tag}</p>
        </>
      </div>
    );
  }
}

export default Tag;
