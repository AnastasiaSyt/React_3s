import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer_wrapper wrapper">
          <p className="year">©2023</p>
          <a className="footer_link" href="https://github.com/AnastasiaSyt">
            AnastasiaSyt
          </a>
          <a className="logo_rsschool" href="https://rs.school">
            <img src="../../public/rs_school.png" alt="logo rs school" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
