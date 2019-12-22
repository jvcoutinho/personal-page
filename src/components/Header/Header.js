import React from 'react'
import './Header.scss'
import { Image, Container, Jumbotron, Row, Col } from 'react-bootstrap'

const Header = () => {
    return (
        <Row className="align-items-center" id="header">
            <Col>
                <Image src="assets/me.jpg" roundedCircle fluid className="w-25 float-right d-block" />
            </Col>
            <Col>
                <h1 className="display-4">João Victor</h1>
            </Col>
        </Row>
    )
}

export default Header