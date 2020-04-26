import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Row, Col } from 'react-bootstrap';

import './SignUpForm.css';

const SignUpForm = (props) => {
  return (
    <div className="Border">
      <br />
      <center>
        <Form>
          <Form.Group as={Row} controlId="formUserEmail" className="FormElements">
            <Form.Label column sm={2}>
              User Name:
              </Form.Label>
            <Col sm={5}>
              <Form.Control type="text" name="User_Name" value={props.userInformation.User_Name} onChange={e => { props.onChange(e) }} />
            </Col>
          </Form.Group>
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
        <div>
            <Button variant="secondary" onClick={() => props.onSubmit()} >Register</Button>
        </div>
      </center>
    </div>
  );
}
export default SignUpForm;
