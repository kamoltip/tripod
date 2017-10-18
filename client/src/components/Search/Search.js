import React , { Component } from 'react';
import { render } from 'react-dom';
import './Search.scss';
import {Link} from 'react-router';
import {Segment, Grid, Divider, Image, Responsive, Button, Container, Checkbox, Popup} from 'semantic-ui-react';
import tripod from '../../asset/images/tripod-logo.png';
import API from '../../utils/API';
import { CloudinaryContext, Transformation } from 'cloudinary-react';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gallery: []
    };

    this.searchImages = this.searchImages.bind(this);
  };

  componentDidMount() {
    // window.addEventListener('load', this.searchImages); // h
  }

  searchImages(event) {
    event.preventDefault();
      API.getPicDetails()
      .then(res => this.setState({ gallery: res.data}))
      .catch(err => console.log(err));
  };

  deleteImage(id, pId) {
    // // Delete from Cloudinary
    // API.deleteCloudinary()
    //   .then(res => console.log("Deleted from Cloudinary"))
    //   .catch(err => console.log(err));
    // // Delete form Mongo
    API.deletePicDetails(id)
      .then(res => searchImages())//console.log("Image Deleted"))
      .catch(err => console.log(err));  
  };

  enlargeImage(key,url){
    <Popup trigger={<Image key={this.key} />}  style={style}>
      Hello. This is a regular pop-up which does not allow for lots
      of content. You cannot fit a lot of words here as the
      paragraphs will be pretty narrow.
      <Image src={this.url} />
    </Popup>
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
              <div className='fourthDiv'>
                <div className='searchText'><h1>FIND YOUR PHOTO'S COLLECTION</h1></div>
                  <CloudinaryContext cloudName="tripod"> 
                    {this.state.gallery.map(data => (
                      <div className="responsive" key={data._id} style={style.responsive} onClick={ () => this.enlargeImage(data._id,data.pic_url)} >
                        <div className="img" style={style.img} >
                          <Image key={data.pic_url} style={style.displayImage}>
                            <Popup hoverable flowing size='tiny' position='top center' style={style.popStyle}
                                trigger={
                              <Image src = {data.pic_url} style = {style.imgLarge} /> }
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
                                      </Button.Group>
                                    </Grid.Column>
                                  </Grid.Row>
                                </Grid>
                              </Container>
                            </Popup>

                          </Image>
                        </div>
                      </div>
                    ))}
                  </CloudinaryContext> 
                    <Divider section/>
                  <Container>
                  <Button.Group>
                  <Button size='big' floated='left' color='red' onClick={this.searchImages} content='Search Photos' />
      
                </Button.Group>
                </Container>
              </div>
            </div>
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
    height: 'auto',
    width: '20%',
    padding: '1%',
    border: '2px solid white',
    display: 'inline-grid',
    marginTop: '1%',
    marginRight: '1%',
    marginLeft: '1%',
    marginBottom: '1%'
  },
  // displayImage: {
  //   width: '20%',
  //   height: 'auto',
  //   padding:'2%',
  //   border:'2px solid white',
  //   display:'inline-grid',
  //   marginTop:'1%',
  //   marginRight:'1%',
  //   marginLeft:'1%',
  //   marginBottom:'1%',
  // },
  img:{
    border: '1px solid #ccc'
  },
  responsive: {
    padding:'0 6px',
    float:'left',
    width:'24%',
    margin:'10px'
  },
  desc: {
    padding: '15px',
    textAlign:'center'
  }
};
export default Search;