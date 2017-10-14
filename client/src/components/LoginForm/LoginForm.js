import React, { Component } from 'react'
import './LoginForm.scss'
import { Image, Button, Icon, Form, Container } from 'semantic-ui-react'


const LoginForm = () => (
<div>
   <Form>
       <Responsive {...Responsive.onlyMobile} {...Responsive.onlyTablet} {...Responsive.onlyComputer} {...Responsive.onlyLargeScreen} {...Responsive.onlyWidescreen} as={Segment}/>
  	<Form.Field>
  		<label>Email</label><br/>
  		<input placeholder="Email" />
  	</Form.Field>
  	<Form.Field>
  		<label>password</label><br/>
  		<input placeholder="password" />
  	</Form.Field>
      <Form.Field>
  		<Checkbox id='agree' label=" I agree to the Terms and Conditions" />
      </Form.Field>
  		<Button Secondary>Submit</Button>
  			<div className='Or'>
  				<hr className='hr'/>
  				<p>or </p>
  				<hr className='hr'/>
  			</div>
  		<Button color='white'>
  			<Icon name='facebook' />Facebook
  		</Button>
  			<br/>
  		<Button color='white'>
  			<Icon name='google' />Google
  		</Button>

   </Form>
</div>
)

export default LoginForm
