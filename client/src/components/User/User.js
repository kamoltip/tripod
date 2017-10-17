import React from 'react'
import './User.scss'
import {
  Button,
  Checkbox,
  Icon,
  Form,
  Segment,
  Responsive,
  Image,
  Divider,
  Container
} from 'semantic-ui-react'
import tripod from '../../asset/images/tripod-logo.png'
import {Link} from 'react-router'

const User = () => (
  <div className='divForm'>
    <Responsive {...Responsive.onlyMobile} {...Responsive.onlyTablet} {...Responsive.onlyComputer} {...Responsive.onlyLargeScreen} {...Responsive.onlyWidescreen} as={Segment}/>
    <Link to='/activity'><img src={tripod} className='tripod'/></Link>
    <Divider section/>
    <Form className='form'>
      <Form.Field>
        <label>E-mail</label><br/>
        <input placeholder="Email" required/>
      </Form.Field>
      <Form.Field>
        <label>Password</label><br/>
        <input placeholder="password" required/>
      </Form.Field>
      <Form.Field>
        <Checkbox id='agree' label=" I agree to the Terms and Conditions"/>
      </Form.Field>
      <Button type='submit' type='submit'>Sign Up</Button>
      <div className='Or'>
        <Divider className='hr'/>
        <p className='orTxt'>OR sign up with</p>
        <Divider clearing className='hr'/>
      </div>

      <Button color='facebook' className='fbDiv'>
        Facebook
      </Button>
      <Button color='google plus'>
        Google
      </Button>
    </Form>
  </div>

)

export default User;
