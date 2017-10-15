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

  saveMongoDb(pic,lat,long, pid){
    console.log("pic details : " + pic + "..... "+ "Public Id : " + pid + "...." + long);
    API.savePicDetails(pic, lat, long, pid)
    .then(res => console.log("details Saved"))
    .catch(err => console.log(err));
  };

  takePicture(event) {
    const file = event.target.files;
    console.log(file);
    if(file.length>0) {
    Location.getLocation(coords => {
      file[0].coords = coords;
      API.postCloudinary({
        file: file[0]
      })
      .then(res => console.log(this.saveMongoDb(res.data.secure_url,file[0].coords.lat,file[0].coords.long,res.data.public_id))) 
      .catch(err => console.log(err));
    });

    const windowURL = window.URL || window.webkitURL;
    this.img.src = windowURL.createObjectURL(file[0]);
    this.img.onload = () => { URL.revokeObjectURL(this.src); }
    }
  };

  render() {
    return (
      <div style={style.container}>
        <img style={style.captureImage} ref={(img) => {this.img = img;}} />
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
      </div>
    );
  }
}

const style = {
  photoIcon: {
    color: 'white',
  },
  captureImage: {
    height: '50%',
    width: '50%',
    margin: '5px 0 15px 0'
  },
  captureInput: {
    display: 'none'
  },
};

export default Capture;
