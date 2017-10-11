import React from 'react';
import { Icon } from 'semantic-ui-react'

class Capture extends React.Component {
  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
  }

  takePicture(event) {
    console.log(event);
    const file = event.target.files;
    console.log(file);
    if(file.length>0) {
    const windowURL = window.URL || window.webkitURL;
    this.img.src = windowURL.createObjectURL(file[0]);
    this.img.onload = () => { URL.revokeObjectURL(this.src); }
    }
  }

  render() {
    return (
      <div style={style.container}>
        <form encType="multipart/form-data">
          <label htmlFor="upload">
            <span style={style.photoIcon}><Icon name='photo' size='massive' /></span>
            <input type="file"
              name="image"
              id="upload"
              accept="image/*"
              capture="capture"
              onChange={this.takePicture}
              style={style.captureInput}
            />
          </label>
        </form>
        <img
          style={style.captureImage}
          ref={(img) => {
            this.img = img;
          }}
        />
      </div>
    );
  }
}

const style = {
  photoIcon: {
    color: 'white',
  },
  captureImage: {
    height: 'auto',
    width: '100%',
  },
  captureInput: {
    display: 'none'
  },
};

export default Capture;
