import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import imgcaro from "../../image/jr.png"

const AboutMe = () => {
    const text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere optio blanditiis perferendis! Aperiam enim at excepturi optio iusto quaerat architecto perferendis quam labore atque modi sit, temporibus blanditiis cumque dolores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere optio blanditiis perferendis! Aperiam enim at excepturi optio iusto quaerat architecto perferendis quam labore atque modi sit, temporibus blanditiis cumque dolores."
    return (
        <Container fluid className=" bg-dark text-white mt-3">
            <Row className="d-flex align-items-center">
                <Col md="6" className="col-lg-6 text-center text-lg-start p-3">
                    <img
                        className="img-fluid animated zoomIn"
                        src={imgcaro}
                        alt="" />
                </Col>
                <Col md="6" className="text-center" style={{ marginBottom: "50px" }} >
                    <h1>Tentang Saya!</h1>
                    <p>{text}</p>
                    <Button variant="primary" className="me-3">Learn More</Button>
                    <Button variant="outline-primary" className="me-3">My Project</Button>
                </Col>

            </Row>
        </Container>

    )
}

export default AboutMe