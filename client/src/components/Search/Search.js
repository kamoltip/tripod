
import React , { Component } from 'react';
import { render } from 'react-dom';
import './Search.scss';
import {Link} from 'react-router';
import {Segment, Grid, Divider, Image, Responsive, Button, Container, Checkbox, Popup} from 'semantic-ui-react';
import tripod from '../../asset/images/tripod-logo.png';
import API from '../../utils/API';
import { CloudinaryContext, Transformation } from 'cloudinary-react';


// have to add - click to enlarge the img/ download buttons/ rotations / etc

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gallery: [],
      checkedImg: [],
      selectedImage: '',
      width_large: true
    };

    this.searchImages = this.searchImages.bind(this);
    // this.enlargeImg = this.enlargeImg.bind(this);
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

  onChangeDownload(checked){
    console.log(checked);
    this.state.checkedImg.push(checked);
    console.log(this.state.checkedImg);
  };

  changeColor(key,url){
    alert(url);
    // this.setState({width_large: !this.state.width_large})

    <Popup trigger={<Image key={this.key} />}  style={style}>
      Hello. This is a regular pop-up which does not allow for lots
      of content. You cannot fit a lot of words here as the
      paragraphs will be pretty narrow.
      <Image src={this.url} />
    </Popup>
  }

  download(event){
    //save checkedImg array
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
                      <div className="responsive" key={data._id} style={style.responsive} onClick={ () => this.changeColor(data._id,data.pic_url)} >
                        <div className="img" style={style.img} >
                            <Image key={data.pic_url} style={style.img}>
                              <img src ={data.pic_url} />
                              <Transformation
                                crop="scale"
                                width="100px"
                                height="100px"
                                dpr="auto"
                                responsive_placeholder="blank"
                              />
                              <input type="checkbox" 
                                     name={data.pic_public_id} 
                                     key={data._id}
                                     onChange={ () => this.onChangeDownload(data)} 
                                     defaultChecked={false} /> {data.pic_date}
                            </Image> 
                        </div>
                      </div>
                    ))}
                  </CloudinaryContext> 

                    <Divider section/>
                  <Container>
                  <Button.Group>
                  <Button size='big' floated='left' color='red' onClick={this.searchImages} content='Search Photos' />
                  <Button size='big' floated='right' color='green' content='Download' onClick={this.download} />
       
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
