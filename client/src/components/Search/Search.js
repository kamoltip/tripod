
import React , { Component } from 'react';
import { render } from 'react-dom';
import './Search.scss';
import {Link} from 'react-router';
import {Segment, Grid, Image, Divider, Responsive, Button} from 'semantic-ui-react';
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
            <Divider section/>
            <div className='thirdDiv'>
              <p className='text'>Find your photos
                <br/>
              collection</p>
              <div className='fourthDiv'>
                 
                  {this.state.images.map(image => (
                    <panel key={ image._id }>
                      <a href={ image.pic_url } target='_blank'><img style={style.displayImage} src={ image.pic_url } /></a>
                    </panel>
                  ))}
                <div className='fifthDiv'>
                  <Button fluid size='large' color='green' content='Download'/>
                  <Button fluid size='large' color='red' onClick={this.searchImages} content='Search' />
                  <Button fluid size='large' color='green' content='Sort Date'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }

};

const style = {
  displayImage: {
    width: '10%',
    height: 'auto',
    padding:'1%'
  }
};
export default Search;


