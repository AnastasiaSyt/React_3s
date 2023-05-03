import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from '../redux/ImageSlice';
import { type RootState } from '../redux/store';

const SearchBar = () => {
  const { search } = useSelector((state: RootState) => state.images);
  const [value, setValue] = useState<string>(search);
  const dispatch = useDispatch();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      dispatch(setSearch(value));
    }
  };

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <div className="search_bar" role="search">
      <input
        value={value}
        type="text"
        onInput={(event) => {
          handleInput(event);
        }}
        onKeyDown={(event) => {
          handleKeyDown(event);
        }}
        role="search-input"
        className="search_input"
        name="searchValue"
        placeholder="What do you want to find?"
      />
    </div>
  );
};

export default SearchBar;
