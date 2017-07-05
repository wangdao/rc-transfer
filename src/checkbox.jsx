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
    checked: PropTypes.bool,
    onChange: PropTypes.func
  };

  componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({
        checked: nextProps.checked
      })
    }
  }

  handleChange = (e)=> {
    const {disabled, onChange} = this.props;

    if (disabled) {return;}

    let checked;

    if (!('checked' in this.props)) {
      checked = e.target.checked;

      this.setState({
        checked: checked
      });
    } else {
      checked = !this.state.checked;
    }

    if (onChange) {
      onChange(checked, e);
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