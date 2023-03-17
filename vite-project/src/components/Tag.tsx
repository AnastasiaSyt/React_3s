import React from 'react';
import '../styles/SearchBar.css';

class Tag extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card_tag">
        <p className="card_tag_text">{this.props.tag}</p>
      </div>
    );
  }
}

export default Tag;
