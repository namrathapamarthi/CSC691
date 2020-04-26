import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Row, Col } from 'react-bootstrap';
import './SignInForm.css';

const SignInForm = (props) => {
  return (

    <div className="Border">
      <br />
      <br />
      <br />
      <Form>
        <Form.Group as={Row} controlId="formUserEmail" className="FormElements">
          <Form.Label column sm={2}>
            Email:
          </Form.Label>
          <Col sm={5}>
            <Form.Control type="text" name="Email_Address" value={props.userInformation.Email_Address} onChange={e => { props.onChange(e) }} />
          </Col>
        </Form.Group>
      </Form>
      <Form>
        <Form.Group as={Row} controlId="formUserPassword" className="FormElements">
          <Form.Label column sm={2}>
            Password:
                     </Form.Label>
          <Col sm={5}>
            <Form.Control type="password" name="Password" value={props.userInformation.Password} onChange={e => { props.onChange(e) }} />
          </Col>
        </Form.Group>
      </Form>
      {
        props.onValidationFailed === true ?
          <p > Authentication Failed: Invalid Email or Password </p> :
          null
      }
      <div className="FormField">
        <center>
          <Button variant="secondary" onClick={() => props.newUser()}>New User ?</Button>
          <Button variant="primary" onClick={() => props.onSubmit()}>Sign In</Button>
        </center>
      </div>
    </div>
  );
}

export default SignInForm;
