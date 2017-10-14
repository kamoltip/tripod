import React,{component} from 'react'
// import './SigupForm.scss'
import{Button, Checkbox, Icon,Form, Responsive, Segment} from 'semantic-ui-react'
// import {Link} from 'react-router'

const SignupForm = () => (

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
		<Button color='facebook'>
			<Icon name='facebook' />Facebook
		</Button>
			<br/>
		<Button color='google'>
			<Icon name='google' />Google
		</Button>

 </Form>

)

export default SignupForm;
