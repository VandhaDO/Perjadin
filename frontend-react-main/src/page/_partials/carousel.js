import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import imgcaro from "../../image/jr.png"

const CarouselComp = () => {
    return <div className="hero-header">
        {
            <Container>
                <Row className="g-5 d-flex align-items-center">
                    <Col md="6" className="text-center" >
                        <h1>Hi! Saya Joko Riyadi</h1>
                        <p>Selamat Datang di Website Portofolio Saya!</p>
                        <Button variant="primary" className="me-3">Portofolio Saya</Button>
                        <Button variant="outline-primary" className="me-3">Tentang Saya</Button>
                    </Col>
                    <Col md="6" className="col-lg-6 text-center text-lg-start p-3">
                        <img
                            className="img-fluid animated zoomIn"
                            src={imgcaro}
                            alt="" />
                    </Col>
                </Row>
            </Container>

        }
    </div>
}

export default CarouselComp