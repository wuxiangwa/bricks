import React, {Component} from 'react';
import './message.css';
import {Message as Mmessage, Message2 } from '../../components';

export default class Message extends Component {
  state = {
    messageShow: false,
    content: null,
    title: null,
    type: null
  }

  componentDidMount () {
    this.openMessageWithType({
      title: 'message',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
    })
  }

  openMessageWithType (obj) {
    this.setState({
      ...obj,
      type: obj.type,
      direction: obj.direction,
      messageShow: true,
    })
  }
  renderHeader() {
    return (<div className="message-header" style={{
        width: '100%',
        padding: 0
      }}>
      <p>Primary</p>
      <button className="delete"></button>
    </div>)
  }
  render() {
    return (<div className="notifications-box">
      <div className="tile is-ancestor">
        <div className="tile is-parent is-6">
          <article className="tile is-child box">
            <h1 className="title">Styles</h1>
            <div className="block styles-box">
              <Mmessage>'Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'</Mmessage>

              <Mmessage header={'Normal'}>'Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'</Mmessage>

              <Mmessage header={this.renderHeader()} type={'primary'}>'Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'</Mmessage>

              <Mmessage header={'Info'} type={'info'}>'Info lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'</Mmessage>

              <Mmessage header={'Success'} type={'success'}>'Success lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'</Mmessage>

              <Mmessage header={'Warning'} type={'warning'} isDelete={true}>'Warning lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'</Mmessage>

              <Mmessage header={'Danger'} type={'danger'} isDelete={true} size={'medium'}>'Danger lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'</Mmessage>
            </div>
          </article>
        </div>

        <div className="tile is-parent is-6">
          <article className="tile is-child box">
            <h1 className="title">Buttons</h1>
            <div className="block message-button">
              <button className="button" onClick={ () => this.openMessageWithType({
                title: 'normal',
                content: 'this is normal',
                direction: 'down'
              })}>Normal</button>
              <button className="button is-primary" onClick={ () => this.openMessageWithType({
                title: 'primary',
                content: 'this is primary',
                type: 'primary',
                direction: 'up',
              })}>Primary</button>
              <button className="button is-info" onClick={ () => this.openMessageWithType({
                title: 'info',
                content: 'this is info',
                type: 'info',
                direction: 'left',
              })}>Info</button>
              <button className="button is-success" onClick={ () => this.openMessageWithType({
                title: 'success',
                content: 'this is success',
                type: 'success',
                direction: 'right'
              })}>Success</button>
              <button className="button is-warning" onClick={ () => this.openMessageWithType({
                title: 'warning',
                content: 'this is warning',
                type: 'warning'
              })}>Warning</button>
              <button className="button is-danger" onClick={ () => this.openMessageWithType({
                title: 'danger',
                content: 'this is danger',
                type: 'danger'
              })}>Danger</button>
            </div>
          </article>
        </div>
      </div>
      <Message2
        isOpen={ this.state.messageShow }
        direction= { this.state.direction }
      >
        <Mmessage header={this.state.title} type={this.state.type}>{ this.state.content}</Mmessage>
      </Message2>
    </div>)
  }
}
