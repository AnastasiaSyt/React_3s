import React from 'react';

class SearchBar extends React.Component {
  state = {
    searchValue: '',
  };

  componentDidMount() {
    const searchValue = localStorage.getItem('searchValue');
    this.setState({ searchValue });
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const value = input.value;
    this.setState({ [input.name]: value });

    const { searchValue } = this.state;
    localStorage.setItem('searchValue', searchValue);
  };

  render() {
    return (
      <div className="search">
        <form className="search_bar">
          <input
            className="search_input"
            type="search"
            name="searchValue" 
            value={this.state.searchValue} 
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }

}

export default SearchBar;