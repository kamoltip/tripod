import React , { component } from 'react';
import { render } from 'react-dom';
import { Icon } from 'semantic-ui-react';
import API from '../../utils/API';
import Location from '../../utils/Location';

class Capture extends React.Component {

  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
  };

  saveMongoDb(pic,lat,long){
    console.log("pic details : " + pic + "..... " + lat + "...." + long);
    API.savePicDetails({
      pic_url: pic,
      pic_title: "not included",
      pic_description: "not included", 
      pic_latitude: lat,
      pic_longitude: long,
      pic_user_id: "not included",
    })
    .then(res => console.log("details Saved"))
    .catch(err => console.log(err));
  }

  takePicture(event) {
    const file = event.target.files[0];
    console.log(file);
    Location.getLocation(coords => {
      file.coords = coords;
      API.postCloudinary({
        file: file
      })
      .then(res => console.log(this.saveMongoDb(res.data.secure_url,file.coords.lat,file.coords.long)))   //res.data.secure_url + "......" + file.coords.lat + "....." + file.coords.long)) 
      .catch(err => consolelog(err));
    });

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
