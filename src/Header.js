import React from 'react';
import {Link} from 'react-router-dom';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button,   } from 'react-bootstrap';


function Header() {
    return(
     <div>
        <Navbar bg="warning pt-3" expand="lg">
        <Navbar.Brand bt="success" href="#home">Mubaland Hospital</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
           
              <Link to="/home">
                   <Nav.Link href="{% App Home.js %}">Home</Nav.Link>
              </Link>
           
              <Link to="/about">
                   <Nav.Link href="{% App About.js %}">about</Nav.Link>
              </Link>

              <Link to="/login">
                   <Nav.Link href="#{% App login.js %}">login</Nav.Link>
              </Link>

              <Link to="/Service">
                   <Nav.Link href="{% App service.js %}">service</Nav.Link>
              </Link>
            
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-danger">Search</Button>
        </Form>
    </Navbar.Collapse>
    </Navbar>  
   </div>
  );
}

export default Header;
