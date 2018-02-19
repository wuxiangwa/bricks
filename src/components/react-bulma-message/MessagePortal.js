import React, {Component} from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import findIndex from 'lodash/findIndex';
import {TransitionGroup, Transition } from 'react-transition-group';
import './message.css';
import 'animate.css/animate.min.css';

export default class MessagePortal extends Component {
  state = {
    list: [],
    timers: [],
    destory: false
  }
  // .isRequired
  static propTypes = {
    isOpen: PropTypes.bool,
    direction: PropTypes.oneOf([
      'down',
      'up',
      'left',
      'right',
    ]).isRequired
  }

  static defaultProps = {
    direction: 'down'
  }

  componentWillReceiveProps(nextProps) {
    const {isOpen, children , duration, direction } = nextProps;
    if (!isOpen) return null;
    const id = this.genId();
    this.state.list.push({id, childrenItem: children, duration, direction})
    this.setState({
      list: [...this.state.list]
    })

    const timer = setTimeout(() => {
      if (this.state.destory || !this.refs[id]) return;
      const index = findIndex(this.state.list, {id: id});
      this.state.list.splice(index, 1);
      this.setState({
        list: [...this.state.list]
      });
    }, duration)
    this.state.timers.push(timer)
    this.setState({
      timers: [...this.state.timers]
    })
  }

  componentWillUnmount() {
    const {timers} = this.state
    for (let i = 0; i < timers.lenth; i++) {
      clearTimeout(timers[i])
    }
    this.setState({destory: true, list: []})
  }

  //生成随机ID：GUID
  genId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      var r = Math.random() * 16 | 0,
        v = c === 'x' ? r : ((r & 0x3) | 0x8);
      return v.toString(16);
    }).toUpperCase()
  }

  renderItem = ({
    id,
    childrenItem,
    duration,
    direction,
    ...props
  }) => {

    return (
      <Transition
        {...props}
        timeout={duration}
        key={id}
        ref={id}
        classNames="fade">
        {(state) => {
          const directions = {
            'down': {
              'bounceInDown' : state === 'entering',
              'bounceOutUp' : state === 'exiting',
            },
            'up': {
              'bounceInUp' : state === 'entering',
              'bounceOutDown' : state === 'exiting',
            },
            'left': {
              'bounceInLeft' : state === 'entering',
              'bounceOutRight' : state === 'exiting',
            },
            'right': {
              'bounceInRight' : state === 'entering',
              'bounceOutLeft' : state === 'exiting',
            }
          }
          return (
            <div className={classNames('message-box animated', {
              ...directions[direction]
            })}
              >
                { childrenItem }
            </div>
          )
        }}

    </Transition>)
  }

  render() {
    const {isOpen} = this.props;
    const {list} = this.state;
    if (!isOpen)
      return null;
    return (<div className="messages">
      <TransitionGroup className='todo-list'>
        {
          list.length
            ? list.map(vo => this.renderItem(vo))
            : null
        }
      </TransitionGroup>

    </div>)
  }

}
