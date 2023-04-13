import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footr = () => {
    return (
        <Container fluid className="bg-success text-white fixed-bottom">
            <Row>
                <Col>
                    <center className="mt-3 mb-3"><p>Copyright &#169; 2022 by Pemkab Bojonegoro</p></center>
                </Col>
            </Row>
        </Container>
    );
}

export default Footr