import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const classPrefix = 'dot-checkbox';

export default class Checkbox extends React.Component {

  constructor() {
    super();

    this.state = {
      checked: false
    }
  }

  static propTypes = {
    checked: PropTypes.bool
  };

  componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({
        checked: nextProps.checked
      })
    }
  }

  handleChange = (e)=> {
    const {disabled} = this.props;

    if (disabled) {return;}

    if (!('checked' in this.props)) {
      this.setState({
        checked: e.target.checked
      })
    }


  };

  render() {
    const {children} = this.props;

    const classes = classNames({
      [classPrefix]: true,
      [`${classPrefix}-checked`]: this.state.checked
    });

    return (
      <label className={classPrefix + '-wrapper'}>
      <span className={classes}>
        <input className={classPrefix + '-input'} type="checkbox" onChange={this.handleChange}/>
        <span className={classPrefix + '-inner'}></span>
      </span>

        {children !== undefined ? <span>{children}</span> : null}
      </label>
    )
  }
}