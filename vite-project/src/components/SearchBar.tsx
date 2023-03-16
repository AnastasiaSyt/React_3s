import React from 'react';
import '../styles/SearchBar.css';

class SearchBar extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
  }
  render() {
    return (
      <div className="search">
        <form className="search_bar">
          <input className="search_input" type="search" placeholder="Search..." />
        </form>
      </div>
    );
  }
}

export default SearchBar;
