import React, { Component } from 'react';
import AvatarEditor from "react-avatar-editor";
import Image from './profile.jpg'

class App extends Component {
  state = {
    scale: 1,
    imgUrl: ''
  }

  onClickSave = () => {
    if (this.editor) {
      const canvas = this.editor.getImage().toDataURL() // base64
      fetch(canvas)
      .then(res => res.blob())  // 转换为二进制文件
      .then(blob => {// 临时文件URL
        this.setState({imgUrl: window.URL.createObjectURL(blob)})
      })
    }
  }
  handleChange = (e) => {
    console.log(e.nativeEvent)
    if (e.target.value >= 1) {
      this.setState({scale: e.target.value})
    } 
  }
  render() {
    const {scale, imgUrl} = this.state;
    return (
      <div className="App">
        <AvatarEditor
          ref={node => this.editor = node}
          image={Image}
          width={250}
          height={250}
          border={50}
          color={[255, 255, 255, 0.6]}
          scale={scale}
          rotate={0}
        ></AvatarEditor>
        <div>
          <input style={{marginLeft: '75px'}} type="range" value={scale} onChange={this.handleChange} />
          <button onClick={this.onClickSave}>保存</button>
        </div>
        <div>
          <img src={imgUrl} alt=""/>
        </div>        
      </div>
    )
  }
}

export default App;
