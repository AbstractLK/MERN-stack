import React from "react";
import {Button, Navbar, Container,Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

const NavbarPage = ()=>{
    return(
        <>
            <Navbar bg="dark" data-bs-theme="dark" fixed='top'>
                <Container>
                    <Navbar.Brand as={Link} to='/'>Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/about'>About</Nav.Link>
                        <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                        <Nav.Link as={Link} to='/itemList'>Products</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarPage;