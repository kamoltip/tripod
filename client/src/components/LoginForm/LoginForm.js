import React, { Component } from 'react'
import './LoginForm.scss'
import { Image, Button, Icon, Form, Container } from 'semantic-ui-react'
import Menu from '../Menu/Menu'

const LoginForm = () => (
<div>
  <Segment.Group>
<Responsive as={Menu} {...Responsive.onlyMobile}>Mobile</Responsive>
<Responsive as={Segment} {...Responsive.onlyTablet}>Tablet</Responsive>
<Responsive as={Segment} {...Responsive.onlyComputer}>Computer</Responsive>
<Responsive as={Segment} {...Responsive.onlyLargeScreen}>Large Screen</Responsive>
<Responsive as={Segment} {...Responsive.onlyWidescreen}>Widescreen</Responsive>
</Segment.Group>
</div>
)

export default LoginForm
