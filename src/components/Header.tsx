import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header_wrapper wrapper">
          <div className="header_logo">
            <Link to="/main">
              <img src="../public/Logo_2.svg" alt="project logo" />
            </Link>
          </div>
          <ul className="header_nav">
            <li className="header_nav_item">
              <Link to="/main" className="header_link">
                Home
              </Link>
            </li>
            <li className="header_nav_item">
              <Link to="/about" className="header_link">
                About As
              </Link>
            </li>
            <li className="header_nav_item">
              <Link to="/form" className="header_link">
                Form
              </Link>
            </li>
          </ul>
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default Header;
