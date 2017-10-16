
import React , { Component } from 'react';
import { render } from 'react-dom';
import './Search.scss';
import {Link} from 'react-router';
import {Segment, Grid, Image, Divider, Responsive, Button, Container, Checkbox} from 'semantic-ui-react';
import tripod from '../../asset/images/tripod-logo.png';
import API from '../../utils/API';


// have to add - click to enlarge the img/ download buttons/ rotations / etc


class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [],
      url: "",
      date: "",
      pid: ""
    };

    this.searchImages = this.searchImages.bind(this);
  };

  searchImages(event) {
    event.preventDefault();
      API.getPicDetails()
      .then(res => this.setState({ images: res.data})) ////console.log(res.data))
      .catch(err => console.log(err));
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

                  {this.state.images.map(image => (

                    <panel key={ image._id }>
                      <a href={ image.pic_url } target='_blank'><img style={style.displayImage} src={ image.pic_url } /></a>
                      <Checkbox className='checkbox' />
                    </panel>

                  ))}
                    <Divider section/>
                  <Container>
                  <Button.Group>
                  <Button size='big' floated='left' color='red' onClick={this.searchImages} content='Search Photos' />
                  <Button size='big' floated='right' color='green' content='Download'/>
                  {/* <Button fluid size='large' floated='right' color='green' content='Sort Date'/> */}

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
    width: '20%',
    height: 'auto',
    padding:'2%',
    border:'2px solid white',
    display:'inline-grid',
    marginTop:'1%',
    marginRight:'1%',
    marginLeft:'1%',
    marginBottom:'1%',
  }
};
export default Search;
