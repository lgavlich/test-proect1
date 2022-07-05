import React from 'react';
import { Button } from "antd";
import { Navbar, Nav, NavLink } from "react-bootstrap";
import "antd/dist/antd.css";

 function NavBar() {
    return (
      <>
        <Navbar bg="dark" variant="dark">

                <Nav className="mr-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            
          </Nav>
          <Nav>
            <Button className="me-2">Login</Button>
            <Button>Logout</Button>
          </Nav>
        </Navbar>
      </>
    );}
    export default NavBar;