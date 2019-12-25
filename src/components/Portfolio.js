import React from 'react'
import { Container, Card, Col, Form, CardColumns } from 'react-bootstrap'
import projects from '../projects.json'
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
        projects.forEach(project => {
            let category = project.type
            if (!categories.includes(category))
                categories.push(category)
        })
        return categories.map(category => <option>{category}</option>)
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

    buildPortfolioGrid() {
        return (
            <CardColumns className="portfolio-section">
                {
                    projects
                        .sort((e1, e2) => e1.name < e2.name ? -1 : e1.name === e2.name ? 0 : 1)
                        .filter(project => project.type === this.state.type || this.state.category_chosen === "All")
                        .map(project => this.renderProjectCard(project))
                }
            </CardColumns>
        )
    }

    renderProjectCard(project) {
        if (!(project.type === this.state.type || this.state.category_chosen === "All"))
            return null

        let cardImg = project.thumbPath !== "" ? <Card.Img variant="top" src={project.thumbPath} /> : null
        return (
            <Card>
                {cardImg}
                <Card.Body>
                    <Card.Title><a href={project.link} class="stretched-link card-link" target="_blank" rel="noopener noreferrer">{project.name}</a></Card.Title>
                    <Card.Text class="project-card-text">
                        <p>{project.description}</p>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">{project.technologies.reduce((e1, e2, _) => e1 + " + " + e2)}</Card.Footer>
            </Card >
        )
    }

    getTechnologiesIcon(technology) {
        switch (technology) {
            case "Unity Engine":

                break;

            default:
                break;
        }
    }

    render() {
        return (
            <Container className="main-content-body">
                {this.buildPortfolioHeader()}
                {this.buildPortfolioGrid()}
            </Container>
        )
    }
}