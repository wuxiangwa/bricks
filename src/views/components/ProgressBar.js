import React, {Component} from 'react';
import {ProgressBar as Progress} from '../../components';

export default class ProgressBar extends Component {
  state = {
    value: 15
  }

  plus = () => {
    this.setState({
      value: this.state.value + 5 <= 100
        ? this.state.value + 5
        : 100
    })
  }

  minus = () => {
    this.setState({
      value: this.state.value - 5 >= 0
        ? this.state.value - 5
        : 0
    })
  }

  render() {
    return (<div>
      <div className="tile is-ancestor">
        <div className="tile is-parent is-4">
          <article className="tile is-child box">
            <h1 className="title">Bar Styles</h1>
            <div className="block styles-box">
              <Progress value={15} max={100}></Progress>
              <Progress value={30} max={100} type={'primary'}></Progress>
              <Progress value={45} max={100} type={'info'}></Progress>
              <Progress value={60} max={100} type={'success'}></Progress>
              <Progress value={75} max={100} type={'warning'}></Progress>
              <Progress value={90} max={100} type={'danger'}></Progress>
            </div>
          </article>
        </div>

        <div className="tile is-parent is-4">
          <article className="tile is-child box">
            <h1 className="title">Bar Sizes</h1>
            <div className="block">
              <Progress value={15} max={100} size={'small'}></Progress>
              <Progress value={30} max={100}></Progress>
              <Progress value={45} max={100} size={'medium'}></Progress>
              <Progress value={60} max={100} size={'large'}></Progress>
            </div>
          </article>
        </div>

        <div className="tile is-parent is-4">
          <article className="tile is-child box">
            <h1 className="title">Bar Dynamics</h1>
            <div className="block">
              <Progress type={'success'} size={'large'} value={this.state.value} max={100}></Progress>
              <p className="control has-addons">
                <a className="button" onClick={this.plus}>
                  <span className="icon is-small">
                    <i className="fa fa-plus"></i>
                  </span>
                </a>
                <a className="button" onClick={this.minus}>
                  <span className="icon is-small">
                    <i className="fa fa-minus"></i>
                  </span>
                </a>
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>)
  }
}
