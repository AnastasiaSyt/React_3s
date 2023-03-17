import React from 'react';
import '../styles/Footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="footer wrapper">
        <p className="year">©2023</p>
        <a className="footer_link" href="https://github.com/AnastasiaSyt">
          AnastasiaSyt
        </a>
        <a className="logo_rsschool" href="https://rs.school">
          <img src="../../public/rs_school.png" alt="logo rs school" />
        </a>
      </div>
    );
  }
}

export default Footer;
