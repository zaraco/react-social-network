import React, {Component} from "react";
import {CardGroup, Card, Row, Col, Jumbotron} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment, faHeart} from "@fortawesome/free-solid-svg-icons";


class Home extends Component {
    constructor() {

        let posts = JSON.parse(localStorage.getItem('posts'))

        if (posts == null) {
            localStorage.setItem('posts', JSON.stringify([]))
            posts = []
        }
        super();

        this.state = {
            posts: posts,
            showComment: null

        }
    }

    clickHandleHeart = (i) => {

        this.state.posts[i].like++;

        this.setState({
            posts: this.state.posts
        })
    }

    clickHandleComment = (i) => {
        this.setState({
            showComment: this.state.showComment !== i ? i : null
        })
    }

    render() {

        const {posts} = this.state

        let postsShow = posts.length ? posts.map((post, i) =>
            <Col md={4}>
                <Card key={i} style={{width: '100%',marginBottom:'10px', border: '5px solid white'}}>
                    <Card.Img variant="top" src={post.image} roundedCircle/>
                    <Card.Body>
                        <Card.Text>
                            {post.text}
                            <br/>
                            <FontAwesomeIcon icon={faHeart} style={{cursor: 'pointer'}} onClick={() => {
                                this.clickHandleHeart(i)
                            }}/>
                            <span> {post.like} </span>

                            <br/>
                            <FontAwesomeIcon icon={faComment} style={{cursor: 'pointer'}} onClick={() => {
                                this.clickHandleComment(i)
                            }}/>

                            <span> {post.comments.length}</span>
                            {post.comments.map((comment) =>
                                <div style={this.state.showComment === i ? {display: 'block'} : {display: 'none'}}>
                                    {comment}
                                </div>
                            )}


                        </Card.Text>

                    </Card.Body>
                </Card>
            </Col>
        ) : null

        return (
            <>
                <br/>
                <br/>

                <CardGroup>
                    <Row>

                        {postsShow}

                    </Row>

                </CardGroup>
            </>
        );
    }
}

export default Home;