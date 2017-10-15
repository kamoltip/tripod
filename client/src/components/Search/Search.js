import React, {component} from 'react'
import './Search.scss'
import {Link} from 'react-router'
import {Segment, Grid, Image, Divider, Responsive, Button} from 'semantic-ui-react'
import tripod from '../../asset/images/tripod-logo.png'

const Search = () => (
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
              <h1>This space reserved for rendering the grid and photo from the backend for EVENT DELEGATION</h1>
          <div className='fifthDiv'>
            <Button fluid size='large' color='green' content='Download'/>
              <Button fluid size='large' color='green' content='Sort Date'/>
</div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Search
