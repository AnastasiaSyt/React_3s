import React from 'react';
import '../styles/SearchBar.css';

interface SearchBarState {
  value: string;
}

export default class SearchBar extends React.Component<object, SearchBarState> {
  searchData: { value: string };

  constructor(props: object) {
    super(props);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.state = {
      value: '',
    };
    this.searchData = { value: '' };
  }

  onChangeValue(e: { target: { value: string } }) {
    this.setState({ value: e.target.value });
  }

  componentDidMount() {
    const storageValue = localStorage.getItem('value');

    if (storageValue) {
      this.searchData = JSON.parse(storageValue);

      this.setState({
        value: this.searchData?.value,
      });
    } else {
      this.setState({
        value: '',
      });
    }
  }

  componentDidUpdate(prevState: Readonly<SearchBarState>): void {
    localStorage.setItem('value', JSON.stringify(prevState));
  }

  render() {
    return (
      <div className="search">
        <form className="search_bar">
          <input
            className="search_input"
            type="search"
            placeholder="Search..."
            value={this.state.value}
            onChange={this.onChangeValue}
          />
        </form>
      </div>
    );
  }
}
