import React, { useEffect, useState } from 'react';

function SearchBar() {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') ?? '');

  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', String(searchValue));
    };
  }, [searchValue]);

  return (
    <div className="search" role="search">
      <form className="search_bar">
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
    </div>
  );
}

export default SearchBar;
