import React, {Component} from "react";
import {Figure, Row, Col} from "react-bootstrap";


class Home extends Component {
    constructor() {

        let items = JSON.parse(localStorage.getItem('items'))

      /*  if ( == null) {
            localStorage.setItem('items', JSON.stringify([]))
            items = []
        }*/
        super();

        this.state = {
            items: items
        }
    }

    render() {

        return (
            <>
                <Row>
                    <Col md={4}>
                        <Figure>
                            <Figure.Image
                                width="100%"
                                alt="171x180"
                                src={this.state.post.image}
                            />

                        </Figure>
                    </Col>
                    <Col>
                        <h1>
                            {this.state.product.name}
                        </h1>

                        <p>
                            {this.state.product.text}
                        </p>

                        <p>
                            Amount: {this.state.product.amount} Pcs
                        </p>
                        <p>
                            Price: {this.state.product.price} €
                        </p>

                        <span style={{color: "red", fontWeight: "bold"}}>
                             Carrier: Free
                       </span>

                    </Col>
                </Row>
            </>
        );
    }
}

export default Home;