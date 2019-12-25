import React from 'react'
import { Container, Card, Col, Form, CardColumns, Badge } from 'react-bootstrap'
import projects from '../projects.json'
import './Portfolio.scss'

export default class Portfolio extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            category_chosen: "All categories"
        }
    }

    getCategories = () => {
        let categories = []
        projects
            .map(project => project.type)
            .sort()
            .forEach(category => {
                if (!categories.includes(category))
                    categories.push(category)
            })
        return categories.map(category => <option>{category}</option>)
    }

    updateState = e => {
        this.setState({
            category_chosen: e.target.value
        })
    }

    buildPortfolioHeader = () => {
        return (
            <Container id="portfolio-header">
                <Form>
                    <Form.Row className="justify-content-center">
                        <Form.Group as={Col} controlId="formGridState" className="col-md-auto">
                            <Form.Label>Category</Form.Label>
                            <Form.Control as="select" className="custom-select-lg" onChange={this.updateState}>
                                <option>All categories</option>
                                {this.getCategories()}
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Container>
        )
    }

    compareProjectNames = (project1, project2) => {
        if (project1.name < project2.name) {
            return -1
        } else if (project1.name === project2.name) {
            return 0
        } else {
            return 1
        }
    }

    buildPortfolioGrid = () => {
        return (
            <CardColumns className="portfolio-section">
                {
                    projects
                        .sort(this.compareProjectNames)
                        .filter(project => project.type === this.state.category_chosen || this.state.category_chosen === "All categories")
                        .map(project => this.renderProjectCard(project))
                }
            </CardColumns>
        )
    }

    renderProjectCard = project => {
        let role = project.role == null ? null : <Badge variant="secondary">{project.role}</Badge>
        let cardImg = project.thumbPath == null ? null : <Card.Img variant="top" src={project.thumbPath} />
        let quoteFooter = project.prizes == null ? null : <Card.Footer className="blockquote-footer">{project.prizes}</Card.Footer>
        return (
            <Card>
                {cardImg}
                <Card.Body>
                    <Card.Title><a href={project.link} class="stretched-link card-link" target="_blank" rel="noopener noreferrer">{project.name}</a> {role}</Card.Title>
                    <Card.Text class="project-card-text">
                        <p>{project.description}</p>
                    </Card.Text>
                </Card.Body>
                {quoteFooter}
                <Card.Footer className="text-muted">{project.technologies.reduce((e1, e2, _) => e1 + " + " + e2)}</Card.Footer>
            </Card >
        )
    }

    render = () => {
        return (
            <Container className="main-content-body">
                {this.buildPortfolioHeader()}
                {this.buildPortfolioGrid()}
            </Container>
        )
    }
}