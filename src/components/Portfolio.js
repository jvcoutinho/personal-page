import React from 'react'
import { Container, Row, Card, Col, Form } from 'react-bootstrap'
import sections from '../projects.json'
import arrayChunk from 'lodash/chunk'
import './Portfolio.scss'

export default class Portfolio extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            category_chosen: "All"
        }
    }

    getCategories() {
        let categories = []
        sections.forEach(section => {
            categories.push(<option>{section.type}</option>)
        })
        return categories
    }

    buildPortfolioHeader() {
        return (
            <Container id="portfolio-header">
                <Form>
                    <Form.Row className="justify-content-center">
                        <Form.Group as={Col} controlId="formGridState" className="col-md-auto">
                            <Form.Label>Category</Form.Label>
                            <Form.Control as="select" className="custom-select-lg">
                                <option>All categories</option>
                                {this.getCategories()}
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Container>
        )
    }

    buildPortfolioSection(section) {
        if (!(section.type === this.state.type || this.state.category_chosen === "All"))
            return null

        let chunkProjects = arrayChunk(section.projects, 4)
        return (
            <Container className="portfolio-section">
                <Container className="portfolio-projects">
                    {chunkProjects.map((projects) => (
                        <Row className="projects-row">
                            {projects.map((project) =>
                                <Col className="d-flex justify-content-center">
                                    {this.renderProjectCard(project)}
                                </Col>
                            )}
                        </Row>
                    ))}
                </Container>
            </Container>
        )
    }

    renderProjectCard(project) {
        return (
            <Card className="project-card">
                <Card.Img variant="top" src={project.thumbPath} />
                <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text class="project-card-text">
                        {project.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }

    render() {
        return (
            <Container className="main-content-body">
                {this.buildPortfolioHeader()}
                {sections.map((section, _) => this.buildPortfolioSection(section))}
            </Container>
        )
    }
}