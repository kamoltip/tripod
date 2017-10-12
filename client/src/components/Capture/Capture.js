import React , { component } from 'react';
import { render } from 'react-dom';
import { Icon } from 'semantic-ui-react';
import API from '../../utils/API';

class Capture extends React.Component {

  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
  };

  takePicture(event) {

    console.log(event);
    const file = event.target.files;
    console.log(file);
    if(file.length>0) {
    const windowURL = window.URL || window.webkitURL;
    this.img.src = windowURL.createObjectURL(file[0]);
    this.img.onload = () => { URL.revokeObjectURL(this.src); }
    }

    // Cloudinary Upload
    API.postCloudinary({
      file: event.target.files[0]
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }


  render() {
    return (
      <div style={style.container}>
        <form encType="multipart/form-data">
          <label htmlFor="upload">
            <span style={style.photoIcon}><Icon name='photo' size='huge' color='green'/></span>
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
