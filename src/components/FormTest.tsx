import React from 'react';

class FormTest extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={() => console.log(this.inputRef.current.value)}>Submit</button>
      </div>
    );
  }
}

export default FormTest;
