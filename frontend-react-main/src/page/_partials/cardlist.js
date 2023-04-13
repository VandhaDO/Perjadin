import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardTemp from "./cardtemp";
import imgcaro from "../../image/jr.png"
import 'aos/dist/aos.css';
import { AOS } from "aos/dist/aos.js";


const CardList = props => {
    useEffect(() => {
        // AOS.init({
        //     duration: 2000
        // });
    }, []);

    const itemList = [];

    // console.log(props.data);
    props.data.forEach(dt => {
        itemList.push(<CardTemp key={dt.title} image={imgcaro} title={dt.title} deskripsi={dt.description} link="#" />)
    });

    return (
        <Container style={{ padding: "50px 0" }}>
            <Row>
                <Col lg="12">
                    {/* <div data-aos={"fade-left"}> */}
                    <div>
                        <center>
                            <a href="#" className="mt-3 mb-0 link"><h2 className="mt-3 mb-0" style={{ fontWeight: "400", fontWeight: "bold" }}><b>{props.title}</b></h2></a>
                            <p>{props.description}</p>
                        </center>
                    </div>
                </Col>
            </Row>
            <Row>{itemList}</Row>
        </Container>
    );
}

export default CardList