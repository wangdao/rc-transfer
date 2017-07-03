import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Checkbox from './checkbox';

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expand: false
    }
  }

  static propTypes = {
    title: PropTypes.string,
    style: PropTypes.object,
    expand: PropTypes.bool
  };

  static defaultPropTypes = {
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

  renderChildren = () => {

  };

  handleSwitcherClick = () => {
    this.setState({
      expand: !this.state.expand
    })
  };

  render() {
    const {title, children, style} = this.props;
    const {expand} = this.state;

    const switcherClasses = classNames({
      doticon: true,
      'icon-open': expand,
      'icon-close' : !expand
    });

    return (
      <li className="dot-transfer-list-item dot-transfer-list-item-expand">
        <div className="dot-transfer-list-item-title" style={style}>
          {children ? <i onClick={this.handleSwitcherClick} className={switcherClasses}></i> : null}
          <Checkbox/>
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