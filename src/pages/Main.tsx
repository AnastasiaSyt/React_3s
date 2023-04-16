import React from 'react';
import SearchBar from '../components/SearchBar';
import ImagesCardList from '../components/ImagesCardList';
import '../styles/Card.css';
import '../styles/Preloader.css';
import '../styles/Modal.css';

const Main = () => {
  return (
    <div className="App">
      <div className="wrapper search_main">
        <SearchBar />
        <ImagesCardList />
      </div>
    </div>
  );
};

export default Main;
