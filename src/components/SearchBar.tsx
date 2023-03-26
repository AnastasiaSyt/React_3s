import React from 'react';

interface SearchBarState {
  searchValue: string | number | null;
  [x: string]: string | number | null;
}

class SearchBar extends React.Component<object, SearchBarState> {
  constructor(props: object) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  componentDidMount() {
    const searchValue = localStorage.getItem('searchValue');
    this.setState({ searchValue });
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const value = input.value;
    this.setState({ [input.name]: value });

    const { searchValue } = this.state;
    if (searchValue !== null) {
      localStorage.setItem('searchValue', searchValue.toString());
    }
  };

  render() {
    return (
      <div className="search">
        <form className="search_bar">
          <input
            className="search_input"
            type="search"
            name="searchValue"
            value={this.state.searchValue as string}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
