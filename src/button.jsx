import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const classPrefix = 'dot-btn';

export default ({children}) => {

  const classes = classNames({
    [classPrefix]: true
  });

  return (
    <button className={classes}>
      {children}
    </button>
  )
}