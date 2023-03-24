import React from 'react';
import classes from './Button.module.css';

class OriginalButton extends React.Component {
  render() {
    return <button className={classes.button}>{this.props.children}</button>;
  }
}

export default OriginalButton;
