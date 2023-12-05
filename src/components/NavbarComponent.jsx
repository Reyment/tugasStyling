import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';


export default class NavbarComponent extends Component {
    render() {
        return (
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Ghani</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}
