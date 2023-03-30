import Cards from '../components/Cards';
import React from 'react';
import SearchBar from '../components/SearchBar';

export default function Main() {
  return (
    <div className="wrapper main_wrapper">
      <SearchBar />
      <Cards />
    </div>
  );
}
