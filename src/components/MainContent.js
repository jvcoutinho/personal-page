import React from 'react'
import './MainContent.scss'
import { Container, Row, Col } from 'react-bootstrap'
import { GiArcher, GiSpellBook, GiMailbox } from 'react-icons/gi'
import { IconContext } from 'react-icons'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Portfolio from './Portfolio'

const contents = {
    ABOUT_ME: 'about',
    PORTFOLIO: 'portfolio',
    CONTACT: 'contact'
}

class MainContent extends React.Component {

    getHeaderContent() {
        let text
        let icon
        switch (this.props.content) {
            case contents.ABOUT_ME:
                text = 'About me'
                icon = <GiArcher />
                break
            case contents.PORTFOLIO:
                text = 'Portfolio'
                icon = <GiSpellBook />
                break
            default:
                text = 'Contact'
                icon = <GiMailbox />
        }
        return { text, icon }
    }


    getHeader() {
        let { text, icon } = this.getHeaderContent()
        return (
            <Container id="main-content-header">
                <Row className="align-items-center">
                    <Col className="col-auto">
                        <IconContext.Provider value={{
                            size: "40px", verticalAlign: 'middle'
                        }}>
                            <div>
                                {icon}
                            </div>
                        </IconContext.Provider>
                    </Col>
                    <Col className="mx-md-n3">
                        {text}
                    </Col>
                </Row>
            </Container>
        )
    }

    getBodyContent() {
        switch (this.props.content) {
            case contents.ABOUT_ME:
                return <AboutMe />
            case contents.PORTFOLIO:
                return <Portfolio />
            default:
                return <Contact />
        }
    }

    getBody() {
        return (
            <Container id="main-content-body">
                {this.getBodyContent()}
            </Container>
        )
    }

    render() {
        return (
            <Container id="main-content">
                {this.getHeader()}
                {this.getBody()}
            </Container>
        )
    }

}

export {
    MainContent, contents
}