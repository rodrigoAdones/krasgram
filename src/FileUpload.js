import React, { Component } from 'react';
import firebase from 'firebase';

class FileUpload extends Component {
  constructor () {
    super();
    this.state = {
      uploadValue: 0,
      picture: null
    }
    this.handleUpload = this.handleUpload.bind(this)
  }

  handleUpload (event) {
    const file = event.target.files[0];
    const strorageRef = firebase.storage().ref(`/fotos/${file.name}`);
    const task = strorageRef.put(file);

    task.on('state_changed', snapshot => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      this.setState({
        uploadValue: percentage
      })
    }, error => {
      console.log(error.message)
    }, () => {
      this.setState({
        uploadValue: 100,
        picture: task.snapshot.downloadURL
      })
    });
  }

  render () {
    return (
      <div>
        <progress value={this.state.uploadValue} max="100"></progress>
        <br/>
        <input type='file' onChange={this.handleUpload}/>
        <br/>
        <img width='320' src={this.state.picture} alt=''/>
      </div>
    )
  }
}

export default FileUpload;
