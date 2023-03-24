import React from 'react';
import classes from './Input.module.css';

class OriginalInput extends React.Component {
  render() {
    return <input {...this.props} className={classes.input} />;
  }
}

export default React.forwardRef((props, ref) => <OriginalInput innerRef={ref} {...props} />);
