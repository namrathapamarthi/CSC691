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

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Projects from 'containers/Projects/Projects';
import Header from 'components/Header';
import Footer from 'components/Footer';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

import GlobalStyle from '../../global-styles';
import 'bootstrap/dist/css/bootstrap.min.css';

const data = [
  {
    Project_Name: 'Corona',
    Project_Status: 'Development',
    Current_Stage: '50%',
    Start_Date: '12/Dec/2019',
    End_Date: 'Not Yet Decided',
  },
  {
    Project_Name: 'Ebola',
    Project_Status: 'Completed',
    Current_Stage: '100%',
    Start_Date: '12/Dec/2020',
    End_Date: 'Not Yet Decided',
  },
  {
    Project_Name: 'Hanta',
    Project_Status: 'Research',
    Current_Stage: '10%',
    Start_Date: '12/Dec/2019',
    End_Date: 'Not Yet Decided',
  },
  {
    Project_Name: 'SwineFlu',
    Project_Status: 'Implementation',
    Current_Stage: '70%',
    Start_Date: '12/Dec/2019',
    End_Date: 'Not Yet Decided',
  },
  {
    Project_Name: 'SpanishFlu',
    Project_Status: 'Vanished',
    Current_Stage: '100%',
    Start_Date: '14/Jan/1920',
    End_Date: '',
  },
];

class App extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Project Monitoring Tool</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Projects">Projects</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
            <Button variant="outline-info">Logout</Button>
          </Form>
        </Navbar>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/projects" component={Projects} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
