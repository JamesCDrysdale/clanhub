import React from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
            <Navbar.Brand>
                <Link to='/'>Homework Hub</Link>
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <Form>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </Form>
                </Nav>
                <Nav>
                    <Nav.Link>
                        <Link to='/myhomework'>My Submissions</Link>
                    </Nav.Link>
                    
                    <NavDropdown title="James Drysdale" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}


export default Header;