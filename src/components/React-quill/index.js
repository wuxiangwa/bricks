import React, { Component } from 'react';
import PropTypes from 'prop-types';
import quill from 'quill';
import { encodeBase64, uploadToServe } from './util';
import 'quill/dist/quill.snow.css';
import './reactQuill.css';

import VidemoBlot from './VideoBlot';
// import ImageBlot from './ImageBlot';
// const Delta = quill.import('delta');

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      curImage: null,
      curRange: null
    };

    this._editor = null;
    this.initRef = this.initRef.bind(this);
    this.onEventTextChange = this.onEventTextChange.bind(this);
  }

  static propTypes = {
    style: PropTypes.object,
    timeout: PropTypes.number,
    uploadUrl: PropTypes.string,
    customFonts: PropTypes.arrayOf(PropTypes.string, PropTypes.object),
    getContent: PropTypes.func,
    cursorOutOfEditor: PropTypes.func,
    cursorOn: PropTypes.func,
    cursorHighlighted: PropTypes.func,
    content: PropTypes.string,
    placeholder: PropTypes.string,
    scrollingContainer: PropTypes.string,
    theme: PropTypes.oneOf(['snow', 'bubble']),
    isUpdateImageScale: PropTypes.bool,
  }

  static defaultProps = {
    theme: 'snow',
    timeout: 5000,
    toolbarOptions: [
      [
        { header: [ 1, 2, 3, 4, 5, 6, false] },
        { font: ['mirza', 'roboto', false] }
      ],
      ['bold', 'italic', 'underline', 'strike'],
      [
        { 'list': 'ordered'},
        { 'list': 'bullet'},
        {'indent': '-1'},
        {'indent': '+1'},
        { 'align': [] },
        {'direction': 'rtl'},
      ],
      [ { color: [] }, { background: [] }],
      ['link', 'image', 'video'],
      ['blockquote', 'code-block'],
      ['clean']
    ]
  }

  componentDidMount() {
    const {content, isUpdateImageScale } = this.props;
    const quillContent = document.querySelector('.ql-editor');
    quillContent.innerHTML = content;

    // handle updata image  size
    isUpdateImageScale && this._editor.root.addEventListener('click', this.handleClick.bind(this), false);

    console.log('VidemoBlot:', <VidemoBlot/>);

    // 创建观察者对象
    this.observer = new MutationObserver((mutationList) => {
      mutationList
      .filter(mutationItem => mutationItem.type === 'attributes')
      .forEach(childMutation => {
        console.log('attributes:', childMutation.target)
      })

      mutationList
      .filter(mutationItem => mutationItem.type === 'childList')
      .forEach(childMutation => {
        for(let i = 0; i < childMutation.addedNodes.length; i++) {
          const addedNode = childMutation.addedNodes.item(i)
          if (addedNode.classList.length && addedNode.classList.contains("ql-video")) {
            console.log('do something with video', addedNode)
          }
        }
      })
   })

   // 传入目标节点和观察选项
   this.observer.observe(this._editor.root, { attributes: true, childList: true })
  }

  handleClick (e) {
    const event = e;
    const evtTarget = e.target || e.srcElement;
    console.log(evtTarget.tagName.toLowerCase());
    if (evtTarget.tagName.toLowerCase() === 'img') {
      evtTarget.addEventListener( 'dragover',(e) => {
          console.log('dragenter:', e);
      });
      evtTarget.addEventListener( 'dragenter',(e) => {
          console.log('dragenter:', e);
      });
    }
    if (!e.target) return;
    const handleClickCur = () => {
      const curObj = arguments[0].target;
      if (curObj.tagName.toLowerCase() === 'img') {
        console.log(curObj);
        let value = prompt('set the picture percentage(1~100)', curObj.style.width);
        if (!value) return;
        curObj.style.width = `${value}%`;
        e.target.removeEventListener('click',  handleClickCur);
      }
    };

    if (e.target.tagName === 'IMG') {
      e.target.addEventListener('click',  handleClickCur(), true);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this._editor) return;
    const { curImage, curRange } = this.state;
    if (curImage) {
      // insert image
      this._editor.insertEmbed(curRange.index, 'image', curImage, quill.sources.USER);
      // after image upload set position next
      this._editor.setSelection(curRange.index + 1);
      this.setState({
        curImage: null,
        curRange: null
      })
    }
  }

  componentWillUnmount () {
    const { getContent } = this.props;
    this._editor.root.removeEventListener('dblclick', this.handleClick);
    getContent && this._editor.off('text-change', this.onEventTextChange);
    // 停止观察
    this.observer && this.observer.disconnect();
  }

  initRef(ref) {
    const {
      toolbarOptions,
      customFonts,
      getContent,
      placeholder,
      scrollingContainer,
      theme
    } = this.props
    if (!ref) return;

    //
    // quill.register({ 'formats/image': ImageBlot });

    this._editor = new quill(ref, {
      // debug: 'info',
      modules: {
        toolbar: toolbarOptions
      },
      scrollingContainer,
      placeholder,
      theme
    });
    getContent && this.eventTextChange(); // 监听文本变化
    this.eventSelectChange(); // 监听鼠标选择变化
    this.eventEditChange(); //
    // this.eventFirstChange(); //
    this.imageHandler(); // 图片处理事件
    (customFonts && customFonts.length) && this.customFonts(customFonts); // 设置字体

  }

  imageHandler() {
    // quill editor add image handler
    this._editor.getModule('toolbar').addHandler('image', () => {
      const input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.click();

      // listen upload local image and save to serve
      console.log(input.onchange);
      input.onchange = () => {
        const file = input.files[0];
        // file type is only image.
        if (/^image\//.test(file.type)) {
          const curRange = this._editor.getSelection()
          if (this.props.uploadUrl) {
            // upload to serve
            const {uploadUrl, timeout} = this.props
            uploadToServe(file, 'image', uploadUrl, timeout).then(response => {
              this.setState({curImage: response.url, curRange})
            }).catch(e => {
              console.error(e)
            })
          } else {
            // base 64
            encodeBase64(file).then(response => {
              this.setState({curImage: response, curRange})
            }).catch(e => {
              console.error(e)
            })
          }
        } else {
          console.warn('You could only upload images.');
        }
      };
    });
  }

  eventEditChange() {
    this._editor.on('editor-change', function(eventName, ...args) {
      if (eventName === 'text-change') {
        // args[0] will be delta
      } else if (eventName === 'selection-change') {
        // args[0] will be old range
      }
    });
  }

  eventSelectChange() {
    this._editor.on('selection-change', (range, oldRange, source) => {
      if (range) {
        if (range.length === 0) { //光标在编辑器内
          this.props.cursorOn && this.props.cursorOn(range.index);
        } else {
          var text = this._editor.getText(range.index, range.length);
          this.props.cursorHighlighted && this.props.cursorHighlighted(text);
        }
      } else { // 光标不在编辑器内
        if (!this.props.cursorOutOfEditor) return;
        const quillContent = document.querySelector('.ql-editor');
        this.props.cursorOutOfEditor(quillContent.innerHTML);
      }
    });
  }

  onEventTextChange (delta, oldDleta, source) {
    const quillContent = document.querySelector('.ql-editor');
    this.props.getContent(quillContent.innerHTML, this._editor.getContents());
  }

  eventTextChange() {
    this._editor.on('text-change', this.onEventTextChange);
  }

  // custom-fonts 自定义字体
  customFonts(fonts : Array) {
    const Font = quill.import('formats/font');
    Font.whitelist = fonts;
    quill.register(Font, true);
  }

  render() {
    return (<div className="quill_container" style={this.props.style} ref={this.initRef}/>)
  }
}
