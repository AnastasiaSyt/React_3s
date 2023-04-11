import React, { useState, useEffect } from 'react';
import '../styles/Card.css';
import Cards from '../components/Cards';
import SearchBar from '../components/SearchBar';
import { type IImages } from '../types/IImages';
import Preloader from '../components/Preloader';

const Main = () => {
  const [defaultCards, setDefaultCards] = useState<IImages[]>([]);
  const [searchCards, setSearchCards] = useState<IImages[]>([]);
  const [showDefaultCards, setShowDefaultCards] = useState(true);
  const [loading, setLoading] = useState(false);

  const lsValue = localStorage.getItem('searchhvalue');
  const [searchValue, setSearchValue] = useState(lsValue !== null ? lsValue : '');

  useEffect(() => {
    localStorage.setItem('searchhvalue', searchValue);
    if (localStorage.getItem('searchhvalue') !== null)
      setSearchValue(JSON.parse(JSON.stringify(localStorage.getItem('searchhvalue'))));
  }, [searchValue]);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.unsplash.com/search/photos?&per_page=9&page=1&query=random&client_id=oUzXmCaN7FyevXb3pn-y_bUTpR1uBXUgPthsuwjdZjA`
    )
      .then(async (res) => await res.json())
      .then(
        (data) => {
          setDefaultCards(data.results);
          setLoading(false);
        },
        (error) => {
          console.error(error);
        }
      );
  }, []);

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    updateCards();
  };

  const updateCards = () => {
    setLoading(true);
    const searchValue = JSON.parse(JSON.stringify(localStorage.getItem('searchhvalue')));
    fetch(
      `https://api.unsplash.com/search/photos?&per_page=9&page=1&query=${
        searchValue as string
      }&client_id=oUzXmCaN7FyevXb3pn-y_bUTpR1uBXUgPthsuwjdZjA`
    )
      .then(async (res) => await res.json())
      .then(
        (data) => {
          setSearchCards(data.results);
          setShowDefaultCards(false);
          setLoading(false);
        },
        (error) => {
          console.error(error);
        }
      );
  };

  const handlesearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  if (loading) {
    return <Preloader />;
  } else if (!loading && !showDefaultCards) {
    return (
      <div className="App">
        <div className="wrapper search_main">
          <SearchBar
            value={searchValue}
            onChange={handlesearchValueChange}
            onSubmit={handleSearch}
          />
          <Cards cards={searchCards} />
        </div>
      </div>
    );
  } else if (!loading && showDefaultCards) {
    return (
      <div className="App">
        <div className="wrapper search_main">
          <SearchBar
            value={searchValue}
            onChange={handlesearchValueChange}
            onSubmit={handleSearch}
          />
          <Cards cards={defaultCards} />
        </div>
      </div>
    );
  }
};

export default Main;
