import React from 'react'
import BNavbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import './Navbar.scss'

const Navbar = () => {
    return (
        <BNavbar id="navbar" bg="dark" variant="dark" expand="sm">
            <Container>
                <BNavbar.Brand href="#home" id="brand">João Victor</BNavbar.Brand>
                <BNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BNavbar.Collapse id="basic-navbar-nav">
                    <Container className="justify-content-end">
                        <Nav navbar fill>
                            <Nav.Link href="#home" className="navbar-item" active>Home</Nav.Link>
                            <Nav.Link href="#features" className="navbar-item" disabled>Portfolio</Nav.Link>
                            <Nav.Link href="#features" className="navbar-item" disabled>Contact</Nav.Link>
                        </Nav>
                    </Container>
                </BNavbar.Collapse>
            </Container>
        </BNavbar>
    )
}

export default Navbar