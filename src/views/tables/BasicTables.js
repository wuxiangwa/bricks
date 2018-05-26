import React, {Component} from 'react';
import { connect } from 'react-redux';
class BasicTables extends Component {
  onTestAction() {
    // console.log(this, "onTestAction");
    // console.log(this.props);
    const { dispatch } = this.props;
     dispatch({type: 'TEXT'});
  }
  render() {
    return (
      <div>
      <button className={"button is-success"} onClick={()=> this.onTestAction() }>测试</button>
    </div>
    )
  }
}

export default connect(state => {
  return {

  }
})(BasicTables)
