import React, { type MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

interface HeaderState {
  items: Array<{ id: number; path: string; text: string }>;
  active: number | null;
}

class Header extends React.Component<object, HeaderState> {
  constructor(props: object) {
    super(props);
    this.state = {
      items: [
        { id: 0, path: '/main', text: 'Home' },
        { id: 1, path: '/about', text: 'About As' },
        { id: 2, path: '/form', text: 'Form' },
      ],
      active: null,
    };
  }

  onClick = (event: { target: HTMLElement }) => {
    const { target } = event;
    if (target.dataset.index != null) {
      this.setState({
        active: +target.dataset.index,
      });
    }
  };

  render() {
    const { items, active } = this.state;
    return (
      <div className="header">
        <div className="header_wrapper wrapper">
          <div className="header_logo">
            <Link to="/main">
              <img src="../Logo_5.svg" alt="project logo" />
            </Link>
          </div>
          <ul className="header_nav">
            {items.map((item, index) => (
              <li className="header_nav_item" key={item.id}>
                <Link
                  to={item.path}
                  data-index={index}
                  className={index === active ? 'active' : 'header_link'}
                  onClick={this.onClick as unknown as MouseEventHandler<HTMLAnchorElement>}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
