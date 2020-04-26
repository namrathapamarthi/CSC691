/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { HashRouter as Router } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Projects from 'containers/Projects/Projects';
import axios from 'axios';

import SignInForm from '../Auth/SignInForm';
import SignUpForm from '../Auth/SignUpForm';

import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';

import GlobalStyle from '../../global-styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {

  state = {
    showWarningMessage: false,
    showRegistrationPage: false,
    showLogoutButtton: false,
    userInformation: {
      User_Name: '',
      Email_Address: '',
      Password: ''
    }
  }

  onChangeUserInformation(event) {
    let target = event.target;
    let value = target.value;
    let name = target.name;

    let userInformationForSession = {
      ...this.state.userInformation
    }

    userInformationForSession[name] = value;

    this.setState({
      userInformation: userInformationForSession
    });
  }

  registerNewUser = () => {
    this.setState({
      showRegistrationPage: true
    });
  }

  validateUser = () => {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        let userFound = false;
        
        if (response.data.length > 0) {
          var j;
          for (j = 0; j < response.data.length; j++) {
            if (response.data[j].Email_Address === this.state.userInformation.Email_Address && response.data[j].Password === this.state.userInformation.Password) {
              userFound = true;
              break;
            }
          }
        }
        if (userFound === true) {
          localStorage.setItem('authorizationVerified', true);
          window.location.reload(false);
        }
        else {
          this.setState({
            showWarningMessage: true
          });
          localStorage.setItem('authorizationVerified', false);
        }
      });
  }

  logoutInfomationHandler = () => {
    localStorage.setItem('authorizationVerified', false);
    window.location.reload(false);
  }

  addUserToDatabase = () => {
    let userInfo = {
      ...this.state.userInformation
    };
    axios.post('http://localhost:5000/users/add', userInfo)
      .then(response => {
        this.setState({
          showRegistrationPage: false,
          showWarningMessage : false
        });
      })
      .catch({});
  }

  render() {
    return (
      <div>
        <div>
          {
            localStorage.getItem('authorizationVerified') === 'true'
              ?
              <div>
                <Navbar bg="light" variant="light">
                  <Navbar.Brand href="#home">Project Monitoring Tool</Navbar.Brand>
                  <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                  </Nav>
                  <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                    <Button variant="outline-info" onClick={() => this.logoutInfomationHandler()}>Logout</Button>
                  </Form>
                </Navbar>
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/projects" component={Projects} />
                  <Route path="" component={NotFoundPage} />
                </Switch>
              </div>
              :
              null
          }
          {
            this.state.showRegistrationPage === false && localStorage.getItem('authorizationVerified') === 'false'
              ?
              <SignInForm
                userInformation={this.state.userInformation}
                onValidationFailed={this.state.showWarningMessage}
                onChange={this.onChangeUserInformation.bind(this)}
                newUser={this.registerNewUser}
                onSubmit={this.validateUser} />
              :
              null
          }
          {
            this.state.showRegistrationPage === true && localStorage.getItem('authorizationVerified') === 'false'
              ?
              <SignUpForm
                userInformation={this.state.userInformation}
                onChange={this.onChangeUserInformation.bind(this)}
                onSubmit={this.addUserToDatabase}
              />
              : null
          }

        </div>
      </div>
    );
  }
}

export default App;