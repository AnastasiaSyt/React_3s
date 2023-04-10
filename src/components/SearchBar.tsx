import React from 'react';

function SearchBar() {
  return (
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
  );
}

export default SearchBar;
