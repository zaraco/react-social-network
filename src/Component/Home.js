import React, {Component} from "react";
import {CardGroup, Card, Row, Col, Jumbotron} from "react-bootstrap";


class Home extends Component {
    constructor() {

        let posts = JSON.parse(localStorage.getItem('posts'))

        if (posts == null) {
            localStorage.setItem('posts', JSON.stringify([]))
            posts = []
        }
        super();

        this.state = {
            posts: posts
        }
    }

    render() {
        const {posts} = this.state

        let postsShow = posts.length ? posts.map((post) =>
            <Card style={{width: '18rem'}}>
                <Card.Img style={{width: "210px", height: "200px"}} variant="top" src={post.image} roundedCircle/>
                <Card.Body>
                    <Card.Text style={{color: "red"}}>
                        {post.text}
                        <br/>
                        Like : {post.like}
                        <br/>
                       Comments: {post.comments}
                    </Card.Text>

                </Card.Body>
            </Card>
        ) : null

        return (
            <>
                <br/>
                <br/>
                <Jumbotron>

                    <Row>
                        <Col>
                            <CardGroup>
                                {postsShow}
                            </CardGroup>
                        </Col>
                    </Row>
                </Jumbotron>
            </>
        );
    }
}

export default Home;