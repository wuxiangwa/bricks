import React, {Component} from 'react';
import {ReactQuill} from '../../components';
import './quill.css';

export default class Quill extends Component {
  constructor() {
    super();
    this.state = {
      content: null
    }
    this.getContent = this.getContent.bind(this)
    this.cursorOutOfEditor = this.cursorOutOfEditor.bind(this)
  }

  getContent(content, deltaData) {
    // listen content
    // console.log('content:', content)
  }

  cursorOutOfEditor (e) {
    this.setState({
      content: e
    });
  }

  cursorOn(position) {
    console.log('cursorOn:', position)
  }

  cursorHighlighted(text) {
    console.log('cursorHighlighted:', text)
  }


  render() {
    return (<div className="box">
      <h1 className="title">Your powerful, rich text editor.</h1>
      <h2 className="subtitle">
        <a href="http://quilljs.com">http://quilljs.com</a>
      </h2>
      <div className="scrolling-container">
        <ReactQuill
          // placeholder false
          placeholder={'placeholder'}
          // 上传图片 false
          uploadUrl='http://127.0.0.1:3333/upload'
          // 超时  false
          timeout={5000}
          // 自定义字体  false
          customFonts={['mirza', 'roboto']}
          // 初始化内容
          content={this.state.content}
          // 获取内容  true  false
          getContent={this.getContent}
          // 光标离开编辑器
          cursorOutOfEditor={this.cursorOutOfEditor}
          // 鼠标停留位置
          cursorOn={this.cursorOn}
          // 鼠标选中
          cursorHighlighted={this.cursorHighlighted}
          //
          scrollingContainer={'.scrolling-container'}

          // 是否 可以修改图片比例
          isUpdateImageScale={true}
        />
      </div>
    </div>)
  }
}
