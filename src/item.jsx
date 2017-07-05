import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Checkbox from './checkbox';

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expand: false,
      checked: false
    }
  }

  static propTypes = {
    title: PropTypes.string,
    style: PropTypes.object,
    expand: PropTypes.bool,
    onSelect: PropTypes.func
  };

  static defaultProps = {
    expand: false
  };

  componentWillMount() {
    const {expand} = this.props;

    this.setState({
      expand: expand
    });
  }

  componentWillReceiveProps(nextProps) {
    const {expand} = this.props;

    this.setState({
      expand: expand
    })
  }

  handleSwitcherClick = (e) => {
    e.stopPropagation();

    console.log('handleSwitcherClick');

    this.setState({
      expand: !this.state.expand
    });


  };

  handleClick =(e) => {
    if (e.target && e.target.matches('input')) {
      return;
    }
    e.stopPropagation();

    console.log('handleClick');

    const {onSelect} = this.props;

    const {checked} = this.state;
    this.setState({
      checked: !checked
    });

    if (onSelect) {
      onSelect(!checked);
    }
  };

  handleCheckboxChange = (checked, e) => {
    e.stopPropagation();
    e.preventDefault();

    console.log('handleCheckboxChange');

    const {onSelect} = this.props;

    this.setState({
      checked: checked
    });

    if (onSelect) {
      onSelect(checked);
    }
  };

  render() {
    const {title, children, style} = this.props;
    const {expand, checked} = this.state;

    const switcherClasses = classNames({
      doticon: true,
      'icon-open': expand,
      'icon-close' : !expand
    });

    return (
      <li className="dot-transfer-list-item dot-transfer-list-item-expand" >
        <div className="dot-transfer-list-item-title" style={style} onClick={this.handleClick}>
          {children ? <i onClick={this.handleSwitcherClick} className={switcherClasses}></i> : <i></i>}
          <Checkbox checked={checked} onChange={this.handleCheckboxChange}/>
          <span>{title}</span>
        </div>


        {
          children && expand ?
            <ul className="dot-transfer-sub-list">
              {children}
            </ul>
            : null
        }
      </li>
    )

  }
}

export default Item;