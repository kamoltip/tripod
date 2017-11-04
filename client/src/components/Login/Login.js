import React from 'react';
import PropTypes from 'prop-types';
import './Login.scss';
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

const Login = ({
  onSubmit,
  onChange,
  errors,
  user,
  pin }) => (

   <div className='divLoginForm'>
     <Responsive {...Responsive.onlyMobile} {...Responsive.onlyTablet} {...Responsive.onlyComputer} {...Responsive.onlyLargeScreen} {...Responsive.onlyWidescreen} as={Segment}/>
     <Link to='/'><img src={tripod} className='tripod'/></Link>
     <Divider section/>

     { pin ? <h2>User PIN: {pin}</h2> : ""}

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
           onChange={ onChange }
           value={ user.password }
         placeholder="password" required/>
       </Form.Field>

       {/* <Link to='/activity'><Button type='submit' type='submit'>Sign In</Button></Link> */}
       <Button type='submit' type='submit'>Sign In</Button>

       <div className='Or'>
         <Divider className='hr'/>
         <p className='orTxt'>OR sign in with</p>
         <Divider clearing className='hr'/>
       </div>

       <Button color='facebook' className='fbDiv'>
         Facebook
       </Button>
       <Button color='google plus'>
         Google
       </Button>
       <div>
         <Divider clearing className='hr' />
         <p className="sign-up">Don't have an account? <Link to={'/signup'}>Sign Up</Link></p>
       </div>
       </Form>

   </div>

        )

  Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default Login;
