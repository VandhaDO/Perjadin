import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
    return (
        <Container fluid>
            <Row className="d-flex align-items-center">
                <Col className="bg-dark text-white">
                    <center style={{ margin: "8%" }}>
                        <i><h5>"Learn Anything what you can Learn!, then Share Everything what you can Share!"</h5></i>
                        <p>-- Joko Riyadi --</p>
                    </center>
                </Col>
            </Row>
        </Container>
    )
}

export default Banner