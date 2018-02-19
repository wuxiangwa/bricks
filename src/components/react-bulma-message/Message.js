import React, { Component } from 'react';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import SafeHTMLElement, {canUseDOM} from './helpers/safeHTMLElement';
import MessagePortal from './MessagePortal';


const isReact16 = ReactDOM.createPortal !== undefined;
const createPortal = isReact16
  ? ReactDOM.createPortal
  : ReactDOM.unstable_renderSubtreeIntoContainer;

function getParentElement(parentSelector) {
  return parentSelector();
}

export default class Message extends Component {
  // .isRequired
  static propTypes = {
    appElement: PropTypes.instanceOf(SafeHTMLElement),
    isOpen: PropTypes.bool,
    portalClassName: PropTypes.string,
    parentSelector: PropTypes.func,
    duration: PropTypes.number,
    direction: PropTypes.string,
  }

  static defaultProps = {
    duration: 1500,
    parentSelector() {
      return document.body;
    }
  }

  componentDidMount() {
    if (!canUseDOM) return;
    if (!isReact16) {
      this.node = document.createElement("div");
    }

    const parent = getParentElement(this.props.parentSelector);
    parent.appendChild(this.node);
  }

  componentWillReceiveProps(nextProps) {
    if (!canUseDOM) return;
    const {isOpen} = nextProps;
    if (!this.props.isOpen && !isOpen) return;

    const currentParent = getParentElement(this.props.parentSelector);
    const newParent = getParentElement(nextProps.parentSelector);

    if (newParent !== currentParent) {
      currentParent.removeChild(this.node);
      newParent.appendChild(this.node);
    }
  }

  portalRef = ref => {
    this.portal = ref;
  }

  componentWillUpdate(nextProps) {
    if (!canUseDOM) return;
    if (nextProps.portalClassName !== this.props.portalClassName) {
      this.node.className = nextProps.portalClassName;
    }
  }

  componentWillUnmount () {
    if (!this.node) return;
    const currentParent = getParentElement(this.props.parentSelector);
    currentParent.removeChild(this.node);
  }

  render() {
    console.log(this.props)
    if (!canUseDOM || !isReact16) return null;
    if (!this.node && isReact16) {
      this.node = document.createElement("div");
    }

    return createPortal(
      <MessagePortal
        ref={this.portalRef}
        {...this.props}
      />,
      this.node
    );
  }
}
