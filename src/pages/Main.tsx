import Cards from '../components/Cards';
import React from 'react';
import SearchBar from '../components/SearchBar';

class Main extends React.Component {
  render() {
    return (
      <div className="wrapper main_wrapper">
        <SearchBar />
        <Cards />
      </div>
    );
  }
}

export default Main;
