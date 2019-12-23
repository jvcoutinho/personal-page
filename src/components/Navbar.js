import React from 'react'
import BNavbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import './Navbar.scss'
import { FaLinkedin } from 'react-icons/fa'
import { IconContext } from "react-icons";
import { contents } from './MainContent'

export default class Navbar extends React.Component {

    render() {
        return (
            <BNavbar id="navbar" variant="dark" expand="sm">
                <Container>
                    <BNavbar.Brand href="#home" id="brand">João Coutinho</BNavbar.Brand>
                    <BNavbar.Toggle aria-controls="basic-navbar-nav" />
                    <BNavbar.Collapse id="basic-navbar-nav">
                        <Container className="justify-content-end">
                            <Nav navbar fill>
                                <Nav.Link className="navbar-item" onClick={() => this.props.handleClick('')}>Home</Nav.Link>
                                <Nav.Link className="navbar-item" onClick={() => this.props.handleClick(contents.ABOUT_ME)}>About me</Nav.Link>
                                <Nav.Link className="navbar-item" onClick={() => this.props.handleClick(contents.PORTFOLIO)}>Portfolio</Nav.Link>
                                <Nav.Link className="navbar-item" onClick={() => this.props.handleClick(contents.CONTACT)}>Contact</Nav.Link>
                                <Nav.Link target="_blank" href="https://www.linkedin.com/in/jo%C3%A3o-victor-de-s%C3%A1-ferraz-coutinho-886944b5/" className="navbar-item"><IconContext.Provider value={{
                                    color: "#007eb3", size: "20px"
                                }}>
                                    <div>
                                        <FaLinkedin />
                                    </div>
                                </IconContext.Provider></Nav.Link>
                            </Nav>
                        </Container>
                    </BNavbar.Collapse>
                </Container>
            </BNavbar>
        )
    }
}