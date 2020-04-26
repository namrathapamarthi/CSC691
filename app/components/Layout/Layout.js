import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import Wrapper from '../Wrapper/Wrapper';
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

const Layout = (props) => {
    return (
        <Wrapper>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">Project Monitoring Tool</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/Home">Home</Nav.Link>
                    <Nav.Link href="/Projects">Projects</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                    <Button variant="outline-info">Logout</Button>
                </Form>
            </Navbar>
            <main>
                {props.children}
            </main>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/projects" component={Projects} />
                <Route path="" component={NotFoundPage} />
            </Switch>
        </Wrapper>
    );
}

export default Layout;