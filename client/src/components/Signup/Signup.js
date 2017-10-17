import React from 'react';
import PropTypes from 'prop-types';
import './Signup.scss';
import {
  Button,
  Checkbox,
  Icon,
  Form,
  Segment,
  Responsive,
  Image,
  Divider,
  Message,
  Container
} from 'semantic-ui-react';
import tripod from '../../asset/images/tripod-logo.png';
import { Link } from 'react-router';

const Signup = ({
  onSubmit,
  onChange,
  errors,
  user }) => (

   <div className='divForm'>
     <Responsive {...Responsive.onlyMobile} {...Responsive.onlyTablet} {...Responsive.onlyComputer} {...Responsive.onlyLargeScreen} {...Responsive.onlyWidescreen} as={Segment}/>
     <Link to='/'><img src={tripod} className='tripod'/></Link>
     <Divider section/>
     <Form className='form' action='/activity' onSubmit={ onSubmit }>

       { errors.summary &&  <Message
         error
         header='There was some errors with your submission'
         list={[errors.name, errors.email]} /> }

       <Form.Field>
         <label>E-mail</label><br/>
         <input
           type="email"
           name="email"
           placeholder="Email"
           onChange={ onChange }
           value={ user.name }
         required/>
       </Form.Field>

       <Form.Field>
         <label>Password</label><br/>
         <input
           type="password"
           name="password"
           placeholder="password"
           value={ user.password }
           onChange={ onChange }
         required/>
       </Form.Field>

       <Form.Field>
         <label>
           <span className="checkbox">Agree to: <Link to='./terms'>Terms & Conditions</Link></span>
         </label>
         <input
           type='checkbox'
           name='agree'
           checked={ user.agree }
           onChange={ onChange }
           id='agree'
         required/>
         </Form.Field>

       <Button type='submit' type='submit'>Sign Up</Button>

       <div className='Or'>
         <Divider className='hr'/>
         <p className='orTxt'>OR Sign Up with</p>
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

  Signup.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default Signup;
