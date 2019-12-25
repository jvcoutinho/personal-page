import React, { useState, useRef, useEffect } from 'react'
import BNavbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import './Navbar.scss'
import { FaLinkedin, FaFacebook, FaTwitter, FaGithub, FaMailBulk, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import { IconContext } from "react-icons";
import { contents } from './MainContent'
import { Overlay, OverlayTrigger, Tooltip } from 'react-bootstrap'

export default class Navbar extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            copiedToClipboardText: ""
        }
    }

    render() {
        return (
            <BNavbar id="navbar" variant="dark" expand="sm" fixed="top">
                <Container>
                    <BNavbar.Brand href="#home" id="brand">João Coutinho</BNavbar.Brand>
                    <BNavbar.Toggle aria-controls="basic-navbar-nav" />
                    <BNavbar.Collapse id="basic-navbar-nav">
                        <Container className="justify-content-end">
                            <Nav navbar fill>
                                <Nav.Link className="navbar-item" onClick={() => this.props.handleClick(contents.ABOUT_ME)}>About me</Nav.Link>
                                <Nav.Link className="navbar-item" onClick={() => this.props.handleClick(contents.PORTFOLIO)}>Portfolio</Nav.Link>
                                {this.renderCopiableSocialIcon("jvsfc@cin.ufpe.br", <FaEnvelope />)}
                                {this.renderCopiableSocialIcon("+5587996834996", <FaWhatsapp />)}
                                {this.renderClickableSocialIcon("https://fb.com/jvcoutinho13", <FaFacebook />)}
                                {this.renderClickableSocialIcon("https://twitter.com/jvcoutinho15", <FaTwitter />)}
                                {this.renderClickableSocialIcon("https://github.com/jvcoutinho", <FaGithub />)}
                                {this.renderClickableSocialIcon("https://linkedin.com/in/jo%C3%A3o-victor-de-s%C3%A1-ferraz-coutinho-886944b5/", <FaLinkedin />)}
                            </Nav>
                        </Container>
                    </BNavbar.Collapse>
                </Container>
            </BNavbar>
        )
    }

    renderClickableSocialIcon(link, icon) {
        return (
            <Nav.Link target="_blank" className="navbar-item" href={link}>
                <IconContext.Provider value={{
                    color: "#007eb3", size: "20px"
                }}>
                    {icon}
                </IconContext.Provider>
            </Nav.Link>
        )
    }

    renderCopiableSocialIcon(copyToClipboardText, icon) {
        let overlayText = this.state.copiedToClipboardText === copyToClipboardText ? "Copied!" : ("Copy " + copyToClipboardText + " to clipboard")
        return (
            <OverlayTrigger placement="bottom" delay={{ show: 100, hide: 200 }} overlay={<UpdatableTooltip>{overlayText}</UpdatableTooltip>}>
                <Nav.Link target="_blank" className="navbar-item" onClick={() => this.copyAndUpdateState(copyToClipboardText)}>
                    <IconContext.Provider value={{
                        color: "#007eb3", size: "20px"
                    }}>
                        {icon}
                    </IconContext.Provider>
                </Nav.Link>

            </OverlayTrigger >
        )
    }

    copyAndUpdateState(copyToClipboardText) {
        this.copyToClipboard(copyToClipboardText)
        this.setState({
            copiedToClipboardText: copyToClipboardText
        })
    }

    copyToClipboard(text) {
        let textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";  //avoid scrolling to bottom
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
}

const UpdatableTooltip = React.forwardRef(({ scheduleUpdate, children, ...props }, ref) => {
    useEffect(() => {
        scheduleUpdate()
    }, [children, scheduleUpdate])
    return <Tooltip ref={ref} {...props}>{children}</Tooltip>
})