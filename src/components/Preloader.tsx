import React from 'react';
import '../styles/Preloader.css';

const Preloader = () => {
  return (
    <div className="container_preloader">
      <div className="circle_preloader"></div>
      <div className="circle_preloader"></div>
      <div className="circle_preloader"></div>
      <div className="circle_preloader"></div>
    </div>
  );
};

export default Preloader;
