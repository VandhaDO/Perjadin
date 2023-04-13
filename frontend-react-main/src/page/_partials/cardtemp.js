import React from "react";
import { Card, Col } from "react-bootstrap";

const CardTemp = props => {
    return (
        <Col md="4" lg="4" xs="12" className="mt-3">
            <Card>
                <a href={props.link} className="link" ><Card.Img variant="top" src={props.image} /></a>
                <Card.Body>
                    <Card.Title><a href={props.link} className="link">{props.title}</a></Card.Title>
                    <Card.Text>
                        {props.deskripsi}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </Col>
    )
}

export default CardTemp