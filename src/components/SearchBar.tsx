import React, { type ChangeEvent } from 'react';

interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: { preventDefault: () => void }) => void;
}

const SearchBar: React.FC<SearchInputProps> = ({ value, onChange, onSubmit }) => {
  return (
    <form className="search_bar" role="search" onSubmit={onSubmit}>
      <div>
        <input
          value={value}
          type="search"
          onChange={onChange}
          role="search-input"
          className="search_input"
          name="searchValue"
          placeholder="What do you want to find?"
        />
      </div>
    </form>
  );
};

export default SearchBar;
