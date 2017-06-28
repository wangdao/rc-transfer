import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const classPrefix = 'dot-checkbox';

export default ({children}) => {

  const classes = classNames({
    [`${classPrefix}-wrapper`]: true
  });

  return (
    <label className={classes}>
      <span className={classPrefix}>
        <input type="checkbox"/>
      </span>
      <span>{children}</span>
    </label>
  )
}