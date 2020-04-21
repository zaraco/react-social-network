import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./Component/Home";
import Add from "./Component/Add";

class App extends Component {
    constructor() {
        super();
        const posts = [
            {
                image: 'home-energy-score-upgrade-portland-1024x683.jpg',
                text: '',
                like: 0,
                comments: []

            },

            {
                image: 'home-insurance-score.jpg',
                text: '',
                like: 0,
                comments: []
            },

            {
                image: 'HOMEALONE3CS.jpg',
                text: '',
                like: 0,
                comments: []

            }

        ]

        localStorage.setItem('posts', JSON.stringify(posts))

        this.state = {
            posts: posts,
        }
    }


    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <Navbar fixed="bottom" expand="md" bg="dark" variant="dark">
                                <Navbar.Brand href="/home">Post-App</Navbar.Brand>
                                <Nav className="mr-auto">
                                    <Nav.Link href="/home">Home</Nav.Link>
                                    <Nav.Link href="/add">Features</Nav.Link>
                                </Nav>
                            </Navbar>

                            <Router>
                                <Switch>

                                    <Route path="/home" component={Home}/>
                                    <Route path="/add" component={Add}/>

                                </Switch>

                            </Router>
                        </Col>
                    </Row>

                </Container>
            </>
        );
    }
}

export default App;
