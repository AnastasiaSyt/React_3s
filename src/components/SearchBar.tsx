import React from 'react';

function SearchBar() {
  return (
    <input
      role="search-input"
      className="search_input"
      type="search"
      name="searchValue"
      placeholder="What do you want to find?"
    />
  );
}

export default SearchBar;
