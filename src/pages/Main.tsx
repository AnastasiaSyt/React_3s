import '../styles/Card.css';
import React, { type ChangeEvent, useState } from 'react';
import axiosInstance from '../services/api';
import { type IImages } from '../types/IImages';
import Cards from '../components/Cards';

function Main() {
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('searchValue') ?? '');
  // const [isLoad, setLoad] = useState<boolean>(false);
  const [cards, setCards] = useState<IImages[]>([]);

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setLoad(true);
    try {
      const response = await axiosInstance.get(
        `search/photos?page=1&query=${searchValue}&client_id=oUzXmCaN7FyevXb3pn-y_bUTpR1uBXUgPthsuwjdZjA`
      );
      setCards(response.data.results);
    } catch (error) {
      console.error(error);
    } finally {
      // setLoad(false);
      console.log('test');
    }
  };

  return (
    <div className="wrapper main_wrapper">
      <div className="search" role="search">
        <form className="search_bar" onSubmit={handleSubmit}>
          <input
            role="search-input"
            className="search_input"
            type="search"
            name="searchValue"
            placeholder="What do you want to find?"
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
            defaultValue={searchValue}
            value={searchValue}
          />
        </form>
        <Cards cards={cards} />
      </div>
    </div>
  );
}

export default Main;
