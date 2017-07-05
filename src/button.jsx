import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const classPrefix = 'dot-btn';

const Button =  ({children, disabled}) => {

  const classes = classNames({
    [classPrefix]: true
  });

  return (
    <button className={classes} disabled={disabled}>
      {children}
    </button>
  )
};

Button.propTypes = {
  disabled: PropTypes.bool
};

export default Button;