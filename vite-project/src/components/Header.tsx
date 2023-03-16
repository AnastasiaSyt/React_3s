import React from 'react';
import '../styles/Header.css';
import SearchBar from './SearchBar';

class Header extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
  }
  render() {
    return (
      <div className="header">
        <div className="header_wrapper wrapper">
          <div className="header_logo">
            <img src="../public/Logo.svg" alt="project logo" />
          </div>
          <ul className="header_nav">
            <li className="header_nav_item">Home</li>
            <li className="header_nav_item">About As</li>
          </ul>
          <SearchBar></SearchBar>
        </div>
      </div>
    );
  }
}

export default Header;
