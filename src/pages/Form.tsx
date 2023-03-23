import TitleForm from '../components/TitleForm';
import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <h1 className="main_title">Form</h1>
          This is form to create new post
          <div className="form">
            <TitleForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
