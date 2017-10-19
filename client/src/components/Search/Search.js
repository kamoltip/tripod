import React , { Component } from 'react';
import { render } from 'react-dom';
import './Search.scss';
import {Link} from 'react-router';
import {Segment, Grid, Divider, Image, Responsive, Button, Container, Checkbox, Popup, Input,
  Modal, Icon} from 'semantic-ui-react';
import tripod from '../../asset/images/tripod-logo.png';
import API from '../../utils/API';
import { CloudinaryContext, Transformation } from 'cloudinary-react';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gallery: [],
      pin:"",
    };
    this.searchImages = this.searchImages.bind(this);
    this.getPin = this.getPin.bind(this);
  };


  componentWillUpdate(nextProps, nextState){
      this.searchImages();
  }

  getPin(event){
    event.preventDefault();
    this.setState({pin:event.target.value});
  };

  searchImages() {
      API.getPicDetails(this.state.pin)
      .then(res => this.setState({ gallery: res.data}))
      .catch(err => console.log(err));
  };


  // Delete an image
  deleteImage(id, pId) {
    if (confirm("Delete this image ?") == true) {
      API.deletePicDetails(id)
        .then(res => searchImages())
        .catch(err => console.log(err));
    };
  };

  // After rotating the image save it in Mongo
  saveImageChanges(id,newUrl){
    API.editPicDetails(id , newUrl)
      .then(res => searchImages())
      .catch(err => console.log(err));
    };

  // Rotate the image
  rotateImage(id, url, pId) {

    const angle = prompt("Enter your rotation degrees ex: 90 -90 180 360");
    if(isNaN(angle)) {
      alert("enter a valid number");
    }
    else{
      const change = "a_" + angle;
      const newUrl = url.substr(0,47) + change + "/" + pId;
      this.saveImageChanges(id,newUrl);
    }

  };


  render() {

    return (
      <div>
        <Responsive {...Responsive.onlyMobile} {...Responsive.onlyTablet} {...Responsive.onlyComputer} {...Responsive.onlyLargeScreen} {...Responsive.onlyWidescreen} as={Grid}/>

        <div className='searchDiv'>
          <div className='metaDiv'>
            <Link to='/activity'><img className='logo' src={tripod}/></Link>
            {/* <Divider section/> */}
            <div className='thirdDiv'>
<<<<<<< HEAD
              <div className='fourthDiv'>

=======
              <div className='fourthDiv'>               

                <div className='enterPin'>
                    <h1>PIN required</h1>
                    <Divider section/>
                    { this.state.pin.length === parseInt(6) ? <h2>{this.state.pin}</h2> :
                    <form required>
                       <Input onChange={this.getPin} fluid required label={{ icon: 'asterisk'
                      }} labelPosition='left corner' placeholder='PIN 6 digits' name='pin' type='text' size='huge' />
                      <br/>                      
                    </form> }
                </div>

                <div className='searchText'><h1>FIND YOUR PHOTO'S COLLECTION</h1></div>
>>>>>>> 6745c9771431a4b221b416b13a06e2cdda5cf71b
                  <CloudinaryContext cloudName="tripod">
                    <div className='searchText'><h1>FIND YOUR PHOTO'S COLLECTION</h1></div>
                    {this.state.gallery.map(data => (
                      <div className="responsive" key={data._id} style={style.responsive} >
                        <div className="img" style={style.img} >

                          <Image key={data.pic_url}>
                            <CloudinaryContext cloudName="tripod">
                              <Transformation width="200" crop="scale" />
                              <Transformation angle="auto"/>
                              <Image src={data.pic_url} style={style.img}>

                              <Popup hoverable flowing size='tiny' position='top center' style={style.popStyle}
                                trigger={<Image src = {data.pic_url} style = {style.imgLarge} />}
                              >
                              <Container>
                                <Grid centered columns='one'>
                                  <Grid.Row>
                                    <Grid.Column centered width={7} centered>
                                      <img src={data.pic_url}/>
                                      <br/>
                                      <Button.Group className='click'>
                                        <Button href={data.pic_url} download={data.pic_url} centered icon='download' basic size='tiny' color='green' />
                                        <Button centered icon='trash' basic size='tiny' color='red' onClick={() => this.deleteImage(data._id , data.pic_public_id)} />
                                        <Button centered icon='repeat' basic size='undo' color='blue' onClick={() => this.rotateImage(data._id, data.pic_url, data.pic_public_id)} />
                                      </Button.Group>
                                    </Grid.Column>
                                  </Grid.Row>
                                </Grid>
                              </Container>
                            </Popup>
                              </Image>
                            </CloudinaryContext>

                          </Image>
                        </div>
                      </div>
                    ))}

                  </CloudinaryContext>
              </div>
            </div>
            <Divider section />
            <Container>
            <Button.Group>
            <Button size='big' color='green' onClick={this.searchImages} content='Refresh' className='refresh'/>

          </Button.Group>
          </Container>
          </div>
          <div className='fifthDiv'>
          </div>
        </div>
      </div>
    );
  }
};
const style = {
  displayImage: {
    height: '125px',
    width: '98px',
    padding: '1.5%',
    display: 'inline-grid',
    marginTop: '1%',
    marginRight: '1%',
    marginLeft: '1%',
    marginBottom: '1%',
    alignItems:'center'
  },
  popStyle: {
  backgroundColor:'rgba(0,0,0,0.0)',
  border:'none',
  boxShadow:'none'
  },
  // img:{
  //   border: '1px solid #ccc'
  // },
  // responsive: {
  //
  //   padding:'0px',
  //   float:'left',
  //   width:'20%',
  //   margin:'10px'
  // }
};
export default Search;
