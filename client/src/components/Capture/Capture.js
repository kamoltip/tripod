import React , { component } from 'react';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import { render } from 'react-dom';
import { Icon } from 'semantic-ui-react';
import API from '../../utils/API';
import axios from "axios";



const Cloudinary_Url = '    https://api.cloudinary.com/v1_1/tripod/upload';
const API_Key = '447781538358186'
var Coudinary_Upload_preset = 'mtmzmtt5'


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

    // Cloudinary Image Upload Start
    const formData = new FormData();
    formData.append("file",event.target.files[0]);
    formData.append("tags", `codeinfuse, medium, gist`);
    formData.append("upload_preset", "mtmzmtt5"); // Replace the preset name with your own
    formData.append("api_key", "447781538358186"); // Replace API key with your own Cloudinary key
    formData.append("timestamp", (Date.now() / 1000) | 0);
    
    return axios.post("https://api.cloudinary.com/v1_1/tripod/upload", formData, {
      headers: { "X-Requested-With": "XMLHttpRequest" },
    }).then(response => {
      const data = response.data;
      const fileURL = data.secure_url // You should store this URL for future references in your app
      console.log(data);
    })
    // Cloudinary Image Upload End
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
  icon: {
    height: '100%'
  },
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
